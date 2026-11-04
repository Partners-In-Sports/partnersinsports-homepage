import { useState } from 'react';
import type { FormEvent } from 'react';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const FROM_NAME = '파트너스인스포츠 홈페이지 문의';
const SUBJECT_PREFIX = '[홈페이지 문의]';

const SUCCESS_MESSAGE = '문의가 접수되었습니다. 확인 후 답변드리겠습니다.';
const GENERIC_ERROR_MESSAGE = '오류가 발생했습니다. 잠시 후 다시 시도해 주세요.';
const NETWORK_ERROR_MESSAGE = '네트워크 오류입니다. 연결을 확인한 후 다시 시도해 주세요.';

interface Web3FormsResponse {
  success?: boolean;
  message?: string;
  body?: { message?: string };
}

function getAccessKey(): string {
  const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  return typeof key === 'string' ? key.trim() : '';
}

export function useContactForm(honeypotName: string) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypotValue = String(formData.get(honeypotName) ?? '').trim();

    if (honeypotValue) {
      setStatus('success');
      setMessage('문의가 접수되었습니다.');
      form.reset();
      return;
    }

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subjectInput = String(formData.get('subject') ?? '').trim();
    const content = String(formData.get('message') ?? '');
    const subject = subjectInput ? `${SUBJECT_PREFIX} ${subjectInput}` : SUBJECT_PREFIX;

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: getAccessKey(),
          from_name: FROM_NAME,
          name,
          email,
          subject,
          message: content,
        }),
      });

      const responseText = await response.text();
      let parsed: Web3FormsResponse | null = null;
      try {
        parsed = JSON.parse(responseText) as Web3FormsResponse;
      } catch {
        parsed = null;
      }

      const isSuccess = response.ok && parsed?.success === true;

      if (isSuccess) {
        setStatus('success');
        setMessage(SUCCESS_MESSAGE);
        form.reset();
      } else {
        setStatus('error');
        setMessage(parsed?.message || parsed?.body?.message || GENERIC_ERROR_MESSAGE);
      }
    } catch {
      setStatus('error');
      setMessage(NETWORK_ERROR_MESSAGE);
    }
  };

  return { status, message, handleSubmit };
}
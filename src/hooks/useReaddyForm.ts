import { useState } from 'react';
import type { FormEvent } from 'react';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useReaddyForm(submitAddr: string, honeypotName: string) {
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

    formData.delete(honeypotName);
    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        payload.append(key, value);
      }
    });

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch(submitAddr, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      const responseText = await response.text();
      let parsed: {
        code?: string;
        message?: string;
        meta?: { message?: string; detail?: string };
      } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const code = parsed?.code;
      const serverMsg =
        parsed?.meta?.message ||
        parsed?.message ||
        parsed?.meta?.detail ||
        responseText ||
        '';
      const isSpam = String(serverMsg).toLowerCase().includes('spam');

      if (response.ok && code === 'OK' && !isSpam) {
        setStatus('success');
        setMessage('문의가 접수되었습니다. 확인 후 답변드리겠습니다.');
        form.reset();
      } else {
        setStatus('error');
        setMessage(serverMsg || '오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } catch {
      setStatus('error');
      setMessage('네트워크 오류입니다. 연결을 확인한 후 다시 시도해 주세요.');
    }
  };

  return { status, message, handleSubmit };
}
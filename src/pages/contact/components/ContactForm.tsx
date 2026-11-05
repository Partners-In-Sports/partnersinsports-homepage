import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import EmailText from '@/components/base/EmailText';
import { useContactForm } from '@/hooks/useContactForm';
import {
  consentCheckboxLabel,
  consentEntrust,
  consentLinkLabel,
  consentRefusal,
  consentRows,
  consentTitle,
} from '@/content/legal';

export default function ContactForm() {
  const { status, message, handleSubmit } = useContactForm('website_alt');
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!consent) {
      event.preventDefault();
      setConsentError(true);
      return;
    }
    setConsentError(false);
    handleSubmit(event);
  };

  const fieldBase =
    'w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-[color:var(--cat)]';

  return (
    <form
      id="contact-inquiry-form"
      onSubmit={onSubmit}
      className="rounded-lg border border-background-200 bg-background-50 p-6 md:p-8"
      noValidate
    >
      <h3 className="font-heading text-xl font-bold tracking-tight text-foreground-950">
        문의 접수
      </h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label htmlFor="contact-name" className="ko font-label text-[11px] tracking-[0.14em] uppercase text-foreground-600 mb-2">
            이름
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="이름을 입력해 주세요"
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="contact-email" className="font-label text-[11px] tracking-[0.14em] uppercase text-foreground-600 mb-2">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="example@company.com"
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label htmlFor="contact-subject" className="ko font-label text-[11px] tracking-[0.14em] uppercase text-foreground-600 mb-2">
            제목
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="문의 제목을 입력해 주세요"
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label htmlFor="contact-message" className="ko font-label text-[11px] tracking-[0.14em] uppercase text-foreground-600 mb-2">
            내용
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            maxLength={500}
            placeholder="문의 내용을 입력해 주세요 (최대 500자)"
            className={`${fieldBase} resize-none`}
          />
        </div>
      </div>

      <input
        className="aux-field"
        type="text"
        name="website_alt"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        readOnly
      />

      <div className="mt-6 border-t border-background-200 pt-6">
        <h4 className="ko font-label text-[11px] tracking-[0.18em] uppercase text-foreground-600">
          {consentTitle}
        </h4>

        <dl className="mt-3 space-y-1.5 text-xs leading-relaxed">
          {consentRows.map((row) => (
            <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <dt className="ko shrink-0 text-foreground-500 sm:w-[104px]">{row.label}</dt>
              <dd
                className={
                  row.emphasis
                    ? 'ko font-semibold text-foreground-900 underline decoration-1 underline-offset-2'
                    : 'ko text-foreground-700'
                }
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-3 text-xs leading-relaxed text-foreground-500">{consentEntrust}</p>
        <p className="mt-2 text-xs leading-relaxed text-foreground-500">
          <EmailText text={consentRefusal} />
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="contact-consent" className="flex items-start gap-3 cursor-pointer">
            <input
              id="contact-consent"
              name="privacy_consent"
              type="checkbox"
              value="동의"
              checked={consent}
              onChange={(event) => {
                setConsent(event.target.checked);
                if (event.target.checked) setConsentError(false);
              }}
              style={{ accentColor: 'var(--cat)' }}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border border-background-300 cursor-pointer"
            />
            <span className="ko text-sm text-foreground-700">{consentCheckboxLabel}</span>
          </label>

          <Link
            to="/privacy"
            className="ko text-xs text-foreground-600 underline underline-offset-2 whitespace-nowrap transition-colors hover:text-foreground-900"
          >
            {consentLinkLabel}
          </Link>
        </div>

        {consentError && (
          <p className="mt-2 text-xs text-accent-600">
            개인정보 수집 및 이용에 동의해 주세요.
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-sm font-label text-foreground-950 whitespace-nowrap cursor-pointer transition-all hover:brightness-95 disabled:opacity-60"
          style={{ backgroundColor: 'var(--cat)' }}
        >
          {status === 'submitting' ? '전송 중…' : '문의하기'}
          <i className="ri-send-plane-line w-4 h-4 flex items-center justify-center" />
        </button>
      </div>

      {status !== 'idle' && status !== 'submitting' && (
        <div
          className={`mt-5 rounded-md border px-4 py-3 text-sm ${
            status === 'success'
              ? 'border-accent-300 bg-accent-50 text-accent-800'
              : 'border-primary-300 bg-primary-50 text-primary-800'
          }`}
        >
          <i className={`${status === 'success' ? 'ri-checkbox-circle-line' : 'ri-error-warning-line'} mr-2`} />
          {message}
        </div>
      )}
    </form>
  );
}
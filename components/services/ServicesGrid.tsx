'use client';

import { useState } from 'react';
import {
  sellingRatesInNgn,
  serviceOfferings,
  type ServiceCurrency,
} from '@/app/services/services.data';
import Section from './Section';

const focusStyles =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:focus-visible:ring-primary-light dark:focus-visible:ring-offset-background-dark';

const currencies: readonly ServiceCurrency[] = ['EUR', 'USD', 'NGN'];

const currencyFormatters: Record<ServiceCurrency, Intl.NumberFormat> = {
  EUR: new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }),
  USD: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }),
  NGN: new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }),
};

function formatServicePrice(price: string, currency: ServiceCurrency) {
  if (price === 'Custom') return price;

  const euroAmount = Number(price.replace(/[^\d.]/g, ''));
  const convertedAmount =
    (euroAmount * sellingRatesInNgn.EUR) / sellingRatesInNgn[currency];

  return `From ${currencyFormatters[currency].format(convertedAmount)}`;
}

export default function ServicesGrid() {
  const [currency, setCurrency] = useState<ServiceCurrency>('USD');

  return (
    <Section
      id="services"
      heading="Services"
      subheading="Focused technical services for teams running applications in the cloud."
    >
      <div className="mb-10 flex flex-col gap-4 border-b border-gray-200 pb-8 dark:border-neutral-dark sm:flex-row sm:items-end sm:justify-between">
        <fieldset>
          <legend className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-secondary dark:text-neutral-light">
            Display currency
          </legend>
          <div className="flex flex-wrap gap-2">
            {currencies.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={currency === option}
                onClick={() => setCurrency(option)}
                className={`min-w-16 border px-4 py-2 text-sm font-semibold transition-all duration-200 ${focusStyles} ${
                  currency === option
                    ? 'border-gray-800 bg-gray-800 text-white dark:border-neutral-light dark:bg-neutral-light dark:text-background-dark'
                    : 'border-gray-300 text-text-secondary hover:border-gray-800 hover:text-text-primary dark:border-neutral-dark dark:text-neutral-light dark:hover:border-neutral-light'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <p className="max-w-md text-xs leading-relaxed text-text-secondary dark:text-neutral-light sm:text-right">
          Converted using selling rates: 1 EUR = ₦1,571.52 and 1 USD = ₦1,346.98.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceOfferings.map((service, index) => (
          <article
            key={service.title}
            className="card-hover flex h-full min-w-0 flex-col border border-gray-200 p-6 dark:border-neutral-dark md:p-8"
            data-aos="fade-up"
            data-aos-delay={index * 75}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-text-secondary dark:text-neutral-light">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="min-w-28 shrink-0 text-right text-sm font-semibold tabular-nums">
                {formatServicePrice(service.price, currency)}
              </p>
            </div>

            <h3 className="mb-4 text-xl font-bold md:text-2xl">
              {service.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-text-secondary dark:text-neutral-light">
              {service.description}
            </p>

            <ul className="mb-8 space-y-2 text-sm text-text-secondary dark:text-neutral-light">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-gray-800 dark:bg-neutral-light"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {service.note && (
              <p className="mb-6 border-l-2 border-gray-300 pl-3 text-xs leading-relaxed text-text-secondary dark:border-neutral-dark dark:text-neutral-light">
                {service.note}
              </p>
            )}

            <a
              href={`mailto:shegezzy@gmail.com?subject=${encodeURIComponent(service.mailtoSubject)}`}
              className={`group mt-auto inline-flex w-fit items-center gap-2 border-b-2 border-gray-800 pb-1 text-sm font-semibold transition-all duration-300 hover:gap-4 dark:border-neutral-light ${focusStyles}`}
            >
              {service.ctaLabel}
              <i aria-hidden="true" className="ri-arrow-right-line" />
            </a>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm text-text-secondary dark:text-neutral-light">
        Prices shown are starting points. Final scope and pricing are agreed before work begins.
      </p>
    </Section>
  );
}

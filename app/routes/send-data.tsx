import type { Route } from "./+types/send-data";
import SendDataForm from "~/components/send-data-form";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Send data" },
    { name: "description", content: "Sending data to a remote server" },
  ];
}

export default function SendData() {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <SendDataForm />
    </ErrorBoundary>
  )
}

function fallbackRender({ error, resetErrorBoundary  }: FallbackProps) {

  return (
    <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4 text-center">
      <div className="flex items-center justify-center gap-2 text-red-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>

        <strong className="block font-medium">Ошибка отправки</strong>
      </div>

      <p className="mt-2 text-sm text-red-700">
        {error.message}
      </p>

      <button
        onClick={resetErrorBoundary }
        className="mt-4 cursor-pointer inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        Повторить попытку
      </button>
    </div>
  );
}

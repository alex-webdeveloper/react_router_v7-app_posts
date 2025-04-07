import { useActionState, useId, type ReactNode } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { sendData, type State } from "~/lib/actions";

type FormProps = {
  action: (formData: FormData) => Promise<void> | void;
  children: ReactNode;
  state: State
};

export default function SendDataForm() {
  const { showBoundary } = useErrorBoundary();
  const initialState: State = { message: null, errors: {}, status: 'Send data to a server' };
  const [state, formAction, isPending] = useActionState(async (prevState: State, formData: FormData) => {
    try {
      return await sendData(prevState, formData);
    } catch (error) {
      showBoundary(error);
      return initialState;
    }
  }, initialState);

  return (
    <div>
      <h2 className="text-center text-2xl font-medium">{state.status}</h2>
      <Form action={formAction} state={state}>
        <Button pending={isPending} />
      </Form>
    </div>
  )
}

function Form({ action, state, children }: FormProps) {
  const id = useId();

  return (
    <form action={action} className="max-w-[800px] mx-auto p-5 bg-white shadow-md rounded-xl">
      <div className="space-y-6">
        <div>
          <label htmlFor={id + "-title"} className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id={id + "-title"}
            type="text"
            name="title"
            placeholder="Input title"
            defaultValue={state.values?.title ?? ""}
            aria-describedby={id + "-title-error"}
            required
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div id={id + "-title-error"} aria-live="polite" aria-atomic="true">
            {state.errors?.title &&
              state.errors.title.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="pb-3">
          <label htmlFor={id + "-body"} className="block text-sm font-medium text-gray-700 mb-1">
            Body
          </label>
          <input
            id={id + "-body"}
            type="text"
            name="body"
            placeholder="Input body"
            defaultValue={state.values?.body ?? ""}
            aria-describedby={id + "-body-error"}
            required
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div id={id + "-body-error"} aria-live="polite" aria-atomic="true">
            {state.errors?.body &&
              state.errors.body.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div id={id + "-error"} aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="text-sl text-center text-red-500">{state.message}</p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </form>

  );
}

function Button({ pending }: { pending: boolean }) {
  return (
    <button type="submit" disabled={pending}
      className="cursor-pointer w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all disabled:opacity-50">
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

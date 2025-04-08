import { z } from 'zod';

const FormSchema = z.object({
	title: z
		.string()
		.trim()
		.min(2, { message: 'Must be 2 or more characters long' }),
	body: z
		.string()
		.trim()
		.min(5, { message: 'Must be 5 or more characters long' }),
});

const url: string = 'https://api.openjavascript.info/post';

export type State = {
	errors?: {
		title?: string[];
		body?: string[];
	};
	message?: string | null;
	status?: string;
	values?: {
		title?: string;
		body?: string;
	};
};

export async function sendData(
	prevState: State,
	formData: FormData
): Promise<State> {
	const rawTitle = formData.get('title')?.toString()?.trim() || '';
	const rawBody = formData.get('body')?.toString()?.trim() || '';

	const validatedFields = FormSchema.safeParse({
		title: rawTitle,
		body: rawBody,
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields. Failed to Sens Data.',
			status: prevState.status,
			values: {
				title: rawTitle,
				body: rawBody,
			},
		};
	}
	const { title, body } = validatedFields.data;
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				title: title,
				body: body,
			}),
			headers: { 'Content-type': 'application/json' },
		});

		if (!response.ok) {
			const errorText = await response.text();
      throw new Error(`Ошибка запроса: ${response.status} - ${errorText}`);
    }
		const data = await response.json();
		return { status: data.status };

	} catch (error) {
		throw new Error(
			error instanceof Error ? error.message : 'Unknown API error'
		);
	}
}

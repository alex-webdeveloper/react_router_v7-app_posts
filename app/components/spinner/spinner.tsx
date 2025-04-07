export function Spinner() {
	
	return (
		<div className="pt-10 pl-50 flex items-center gap-4">
			<div
				className="animate-spin rounded-full border-4 border-blue-200 border-r-transparent h-12 w-12"
				role="status"
			>
				<span className="sr-only">Loading...</span>
			</div>
			<div
				className="animate-ping rounded-full bg-blue-300 h-12 w-12"
				role="status"
			>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
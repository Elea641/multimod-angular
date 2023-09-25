export class UserForm {
	constructor(
		public user?: string,
		public email?: string,
		public address?: {
			street?: string,
			city?: string,
			zipCode?: string,
			details?: string[],
		}
	) {}
}

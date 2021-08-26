module.exports = {
	types: [
		{ value: "feat", name: "feat: ✨    A new feature" },
		{ value: "fix", name: "fix:  🐛    A bug fix" },
		{ value: "docs", name: "docs: 📚    Documentation only changes" },
		{ value: "test", name: "test: 🚨    Changes to tests" },
	],

	scopes: [
		{ name: "admin" },
		{ name: "cli" },
		{ name: "core" },
		{ name: "site" },
	],

	allowTicketNumber: false,
	isTicketNumberRequired: false,
	ticketNumberPrefix: "TICKET-",
	ticketNumberRegExp: "\\d{1,5}",

	// scopeOverrides: { fix: [{ name: "cli" }] },

	messages: {
		type: "Type of change that you're committing:",
		scope: "\nDenote the SCOPE of this change:",
		customScope: "Denote the SCOPE of this change:",
		subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
		body:
			'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		breaking: "List any BREAKING CHANGES:\n",
		footer:
			"List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
		confirmCommit: "Are you sure you want to proceed with the commit above?",
	},

	allowCustomScopes: false,
	allowBreakingChanges: ["feat", "fix"],
	skipQuestions: ["body"],
	subjectLimit: 100,
};

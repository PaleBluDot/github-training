module.exports = {
	types: [
		{
			value: "✨ feat:",
			name: "feat: ✨    A new feature",
		},
		{
			value: "🐞 fix:",
			name: "fix:  🐞    A bug fix",
		},
		{
			value: "📚 docs:",
			name: "docs: 📚    Documentation only changes",
		},
		{
			value: "🚨 test:",
			name: "test: 🚨    Changes to tests",
		},
	],

	scopes: [
		{ name: "admin" },
		{ name: "cli" },
		{ name: "core" },
		{ name: "site" },
	],

	allowTicketNumber: false,
	isTicketNumberRequired: false,
	ticketNumberPrefix: "#",
	ticketNumberRegExp: "\\d{1,5}",

	messages: {
		type: "Type of change that you're committing:",
		scope: "Denote the SCOPE of this change:",
		customScope: "Denote the SCOPE of this change:",
		subject: "Write a SHORT, IMPERATIVE tense description of the change:",
		body: "Provide a LONGER description of the change (optional):",
		breaking: "Are there BREAKING CHANGES?",
		confirmCommit: "Are you sure you want to proceed with the commit above?",
	},

	allowCustomScopes: false,
	allowBreakingChanges: ["feat", "fix"],
	subjectLimit: 100,
};

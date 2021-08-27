module.exports = {
	types: [
		{
			value: "✨ feat",
			name: "✨ feat:\tA new feature",
		},
		{
			value: "🐞 fix",
			name: "🐞 fix:\t A bug fix",
		},
		{
			value: "🧪 test",
			name: "🧪 test:\tTesting improved with new or fixed tests",
		},
		{
			value: "🔩 chore",
			name: "🔩 chore:\t Doesn't modify src or test files",
		},
		{
			value: "📚 docs",
			name: "📚 docs:\t Documentation only changes",
		},
		{
			value: "🚀 build",
			name: "🚀 build:\t Build system config or external dependencies",
		},
		{
			value: "🚨 ci",
			name: "🚨 ci:\t CI config files and scripts",
		},
		{
			value: "♻ refactor",
			name: "♻ refactor:\t Neither fixes a bug nor adds a feature",
		},
		{
			value: "⏪ revert:",
			name: "⏪ revert:\t Reverts a previous commit",
		},
	],

	scopes: [
		{ name: "admin" },
		{ name: "automation" },
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
		subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
		body: "Provide a LONGER description of the change (optional):",
		breaking: "Are there BREAKING CHANGES?",
		confirmCommit: "Are you sure you want to proceed with the commit above?",
	},

	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix"],
	subjectLimit: 60,
	skipQuestions: ["footer"],
};

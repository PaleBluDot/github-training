const types = [
	{
		value: "feat",
		name: "✨ feat:\tA new feature",
	},
	{
		value: "fix",
		name: "🐞 fix:\t A bug fix",
	},
	{
		value: "test",
		name: "🧪 test:\tTesting improved with new or fixed tests",
	},
	{
		value: "chore",
		name: "🔩 chore:\t Doesn't modify src or test files",
	},
	{
		value: " docs",
		name: "📚 docs:\t Documentation only changes",
	},
	{
		value: "build",
		name: "🚀 build:\t Build system config or external dependencies",
	},
	{
		value: "ci",
		name: "🚨 ci:\t CI config files and scripts",
	},
	{
		value: "refactor",
		name: "♻ refactor:\t Neither fixes a bug nor adds a feature",
	},
	{
		value: "revert",
		name: "⏪ revert:\t Reverts a previous commit",
	},
];

const scopes = ["admin", "automation", "cli", "core", "site", "db"].map(
	(name) => ({
		name,
	})
);

module.exports = {
	types,
	scopes,
	messages: {
		type: "Type of change that you're committing:",
		scope: "\nChoose the SCOPE of this change:",
		customScope: "Denote the SCOPE of this change:",
		subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
		body: "Provide a LONGER description of the change (optional):\n",
		breaking: "List BREAKING CHANGES (optional):\n",
		footer: "List CLOSED ISSUES (optional). E.g.: #31, #34:\n",
		confirmCommit: "Are you sure you want to proceed with the commit above?",
	},
	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix"],
	skipQuestions: ["breaking"],
	subjectLimit: 60,
};

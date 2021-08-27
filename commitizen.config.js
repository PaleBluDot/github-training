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

const scopes = ["admin", "automation", "cli", "core", "site"].map((name) => ({
	name,
}));

module.exports = {
	types,
	scopes,
	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix"],
	subjectLimit: 60,
};

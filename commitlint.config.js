module.exports = {
	extends: ["gitmoji"],
	parserPreset: {
		parserOpts: {
			headerPattern: /^(:\w*:)(?:\s)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
			headerCorrespondence: ["type", "scope", "subject", "ticket"],
		},
	},
	rules: {
		prompt: {
			questions: {
				type: {
					description: "Type of change that you're committing",
					enum: {
						docs: {
							description: "Documentation only changes",
							title: "Documentation",
							emoji: "📚",
						},
						feat: {
							description: "A new feature",
							title: "Features",
							emoji: "✨",
						},
						fix: {
							description: "A bug fix",
							title: "Bug Fixes",
							emoji: "🐛",
						},
						test: {
							description: "Changes to tests",
							title: "Tests",
							emoji: "🚨",
						},
					},
				},
				scope: {
					description:
						"What is the scope of this change (e.g. component or file name)",
				},
				subject: {
					description:
						"Write a short, imperative tense description of the change",
				},
				body: {
					description: "Provide a longer description of the change",
				},
				isBreaking: {
					description: "Are there any breaking changes?",
				},
				breakingBody: {
					description:
						"A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself",
				},
				breaking: {
					description: "Describe the breaking changes",
				},
				isIssueAffected: {
					description: "Does this change affect any open issues?",
				},
				issuesBody: {
					description:
						"If issues are closed, the commit requires a body. Please enter a longer description of the commit itself",
				},
				issues: {
					description: 'Add issue references (e.g. "fix #123", "re #123".)',
				},
			},
		},
	},
};

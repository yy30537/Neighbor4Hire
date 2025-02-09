# Contributing to Neighbor4Hire

Thank you for your interest in contributing! Below are some guidelines to help maintain consistency and quality in our project.

## Branching Strategy

We follow a **GitFlow** workflow:
- **main/master**: The stable production branch.
- **develop**: Integration branch for features; always reflects the latest completed development work.
- **feature/**: For new features (e.g., `feature/user-authentication`).
- **bugfix/**: For bug fixes (e.g., `bugfix/login-error`).
- **release/**: For preparing a new production release.
- **hotfix/**: For urgent fixes in production.

Always branch off from the `develop` branch for new features or bug fixes.

## Commit Message Standards

We use **Conventional Commits**:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring without adding features or fixing bugs
- **test**: Adding or modifying tests
- **chore**: Maintenance or tooling changes

Examples:
- `feat(auth): add JWT-based authentication`
- `fix(job-listing): correct job status update logic`
- `docs(readme): update installation instructions`

## How to Contribute

1. **Fork** the repository and create your feature branch from `develop`.
2. **Commit** your changes following the commit message guidelines.
3. **Push** your branch to your fork.
4. **Open a Pull Request** to the `develop` branch in this repository.
5. Ensure your code passes all tests and linting before requesting a review.

## Reporting Issues

Please use GitHub Issues to report bugs, request features, or ask questions.

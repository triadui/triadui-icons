# Contributing to MUI-III

Thank you for your interest in contributing to MUI-III! We welcome contributions from the community.

## Ways to Contribute

- 🐛 **Report Bugs**: Found a bug? [Open an issue](https://github.com/yourusername/mui-iii/issues)
- 💡 **Suggest Features**: Have an idea? [Start a discussion](https://github.com/yourusername/mui-iii/discussions)
- 📝 **Improve Documentation**: Help make our docs better
- 🛠️ **Code Contributions**: Fix bugs or add features

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/mui-iii.git
   cd mui-iii
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development**
   ```bash
   npm run dev
   ```

4. **Run Tests**
   ```bash
   npm run build
   ```

## Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Follows the configured rules
- **Prettier**: Code formatting (if configured)

## Pull Request Process

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clear, concise commit messages
   - Add tests for new features
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   npm run build
   npm run lint
   ```

4. **Submit PR**
   - Fill out the PR template
   - Reference any related issues
   - Ensure CI checks pass

## Adding New Icons

When adding new icon categories or icons:

1. Update `src/icons.ts` with new icon constants
2. Add appropriate TypeScript types
3. Update documentation
4. Test the icon browser functionality

## Icon Guidelines

- Use official Material Symbols names
- Maintain category organization
- Ensure icons work with all variations (fill, weight, etc.)
- Test across different browsers

## Questions?

Feel free to [start a discussion](https://github.com/yourusername/mui-iii/discussions) or [open an issue](https://github.com/yourusername/mui-iii/issues) with questions.

Thank you for contributing! 🎉
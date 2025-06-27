# QuickBooks Onboarding Flow

A modern React application for managing the QuickBooks integration onboarding process.

## 🚀 Features

- Multi-step onboarding flow
- Responsive design with Material-UI
- TypeScript for type safety
- React Query for data fetching and state management
- Environment-based configuration

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   └── OnboardingFlow/ # Onboarding flow components
├── constants/          # Application constants
├── environments/       # Environment configurations
├── hooks/              # Custom React hooks
├── services/           # API services and data fetching
├── theme/              # MUI theme configuration
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onboarding-flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

## 📦 Environment Variables

Create `.env` files in the root directory for different environments:
- `.env.development` - Development environment
- `.env.production` - Production environment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- Material-UI (MUI)

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/72511367-7e77-4d1b-bd95-89d6ca888a00) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# onboarding-app

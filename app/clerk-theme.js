
export const clerkTheme = {
  variables: {
    colorInputText: '#ffffff',
  },
  elements: {
    rootBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    card: {
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    formFieldInput: {
      color: '#ffffff',
      border: '1px solid #4a5568',
      '&:focus': {
        borderColor: '#007BFF',
      },
    },
    userButtonAvatarBox: {
      width: '40px',
      height: '40px',
    },
    userButtonAvatarImage: {
      objectFit: 'cover',
    },
    userButtonPopoverCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
  },
};

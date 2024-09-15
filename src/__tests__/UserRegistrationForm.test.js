import { render, screen, fireEvent } from '@testing-library/react';
import UserRegistrationForm from '../UserRegistrationForm';

describe('User Registration', () => {
  test('renders registration form', () => {
    render(<UserRegistrationForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/enter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /register/i })
    ).toBeInTheDocument();
  });

  test('allows user to register', () => {
    render(<UserRegistrationForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Testy McTesterson' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test123@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/enter/i), {
      target: { value: 'really-Good_Password^2510' },
    });
    fireEvent.change(screen.getByLabelText(/confirm/i), {
      target: { value: 'really-Good_Password^2510' },
    });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
});

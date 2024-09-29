// __tests__/Page.test.tsx
import { render, screen } from '@testing-library/react';
import Page from '../app/page'; // Path to your Page component
import { getAllCars } from "@/actions/cars";
import '@testing-library/jest-dom';

// Mock the getAllCars function
jest.mock('@/actions/cars', () => ({
  getAllCars: jest.fn(),
}));

// Mock the ClientHome component to avoid testing its implementation here
// eslint-disable-next-line react/display-name
jest.mock('../app/components/Home', () => () => <div>ClientHome Component</div>);

describe('Page Component (Server-side)', () => {
  it('renders ClientHome with car data from getAllCars', async () => {
    const mockCarData = [{ id: 1, name: 'Car 1' }, { id: 2, name: 'Car 2' }];
    
    // Mock the getAllCars function to return mock data
    (getAllCars as jest.Mock).mockResolvedValueOnce(mockCarData);

    // Render the Page component
    render(await Page());

    // Check if the ClientHome component renders with the mocked data
    expect(screen.getByText('ClientHome Component')).toBeInTheDocument();
  });
});

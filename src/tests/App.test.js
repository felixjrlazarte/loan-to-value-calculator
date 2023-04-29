import renderWithProviders from '../utils/test-utils';
import App from '../App';

describe("App", () => {
  it('should renders calculator component', () => {
    const { getByText } = renderWithProviders(<App />);
    expect(getByText(/Loan To Value Calculator/i)).toBeInTheDocument();
  });
});

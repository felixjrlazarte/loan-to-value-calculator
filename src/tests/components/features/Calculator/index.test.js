import renderWithProviders, { fireEvent } from '../../../../utils/test-utils';
import Calculator from '../../../../components/features/Calculator';

describe("components/features/Calculator", () => {
  it('should renders calculator component', () => {
    const { getByText } = renderWithProviders(<Calculator />);
    expect(getByText(/Loan To Value Calculator/i)).toBeInTheDocument();
  });

  it('should fetch and display result', () => {
    const { getByText, getByPlaceholderText, getByRole } = renderWithProviders(
      <Calculator />
    );

    const depositValue = getByPlaceholderText("Deposit value");
    const purchasePrice = getByPlaceholderText("Purchase price");

    fireEvent.input(depositValue, { target: { value: 100 } });
    fireEvent.input(purchasePrice, { target: { value: 700 } });

    fireEvent.click(getByText("Submit"));
  });
});

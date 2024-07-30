import { render, screen } from "@testing-library/react";
import App from "./App"; // Asegúrate de importar tu componente correctamente

test("renders learn react link", () => {
  render(<App />);

  // Cambia 'learn react' por el texto correcto que debería estar presente
  const linkElement = screen.getByText(/preguntas y respuestas/i); // Asegúrate de usar el texto correcto

  expect(linkElement).toBeInTheDocument();
});

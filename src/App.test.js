import { render } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import App from "./App";
import MainWeatherCard from "./components/MainWeatherCard/MainWeatherCard";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";

import { mock_cityInfo, mock_forecastInfo } from "./__mockData__";

// configure Enzyme Adapter
configure({ adapter: new Adapter() });

// add matchMedia feature
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

// tests
it("get loading state before fetch data", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("loading")).toHaveTextContent("Cargando...");
});

describe("get current location info", () => {
  it("city", () => {
    const { getByTestId } = render(
      <MainWeatherCard cityInfo={mock_cityInfo} isCurrentLocation={true} />
    );
    expect(getByTestId("city_name")).toHaveTextContent("San Miguel de Tucumán");
  });

  it("country", () => {
    const { getByTestId } = render(
      <MainWeatherCard cityInfo={mock_cityInfo} isCurrentLocation={true} />
    );
    expect(getByTestId("country_name")).toHaveTextContent("ARG");
  });
});

it("get current location temp", () => {
  const { getByTestId } = render(
    <MainWeatherCard cityInfo={mock_cityInfo} isCurrentLocation={true} />
  );
  expect(getByTestId("temp")).toHaveTextContent("24");
});

it("get current location next 5 days forecast", () => {
  const wrapper = shallow(
    <ForecastContainer forecastInfo={mock_forecastInfo} />
  );

  expect(wrapper.find(".forecasDayContainer").length).toBe(5);
});

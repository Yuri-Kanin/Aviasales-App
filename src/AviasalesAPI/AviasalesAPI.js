class AviasalesAPI {
  BaseURL = "https://aviasales-test-api.kata.academy/";

  getId = async () => {
    const response = await fetch(`${this.BaseURL}search`);
    const responseToJSON = await response.json();
    const id = await responseToJSON.searchId;
    return id;
  };

  getTickets = async (id) => {
    try {
      const response = await fetch(`${this.BaseURL}tickets?searchId=${id}`);
      const responseToJSON = await response.json();
      const { stop, tickets } = await responseToJSON;
      return { stop, tickets };
    } catch (err) {
      if (err.status === 500) {
        return { stop: false, tickets: null };
      }
      return { stop: false, tickets: null };
    }
  };
}

export default AviasalesAPI;

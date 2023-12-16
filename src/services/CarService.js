const url = `http://localhost:3000`



export async function getAllCars() {
    

   const response = await fetch(`${url}/data/cars`);
   const data = await response.json();
   return data;

   //TEST With no Cars
   //return []

}
export async function getCarById(id) {

   const response = await fetch(`${url}/data/cars/${id}`);
   const data = await response.json();
   return data;

}
export async function createCar({brand, model, description,  year, image, price}, accessToken) {

   const options = {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          'X-Authorization': accessToken
      },
    body: JSON.stringify({ brand, model, description, year, image, price })
  }
   return await fetch(`${url}/data/cars`, options)
  

}
export async function editCar({carId, brand, model, description,  year, image, price}, id, accessToken) {
 
   const options = {
      method: 'put',
      headers: {
          'Content-Type': 'application/json',
          'X-Authorization': accessToken
      },
    body: JSON.stringify({ brand, model, description, year, image, price })
  }
  return await fetch(`${url}/data/cars/${id}`, options)
  

}
export async function deleteCar(id, accessToken){
   const options = {
      method: 'delete',
      headers: {
          'Content-Type': 'application/json',
          'X-Authorization': accessToken
      }
   }
   return await fetch(`${url}/data/cars/${id}`, options)
}

// getCarsByYear() {
//   return this.http.get<ICar[] | null>(`${this.host}data/cars/year`);
//   //?sort=year
// }
// getMyCars() {
//   return this.http.get<ICar[] | null>(`${this.host}data/mycars`);
//   //?sort=year
// }
// getAllCars() {
//   return this.http.get<ICar[]>(`${this.host}data/cars`);
// }
// //return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}`
// getCarById(id: string) {
//   return this.http.get<ICar>(`${this.host}data/cars/${id}`);
// }

// }

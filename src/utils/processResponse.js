export const processResponse = response => {
  response = JSON.stringify(response)
  const data = JSON.parse(response)

  if (data.error) return { data: data.error.data.error, status: data.error.status }

  return {data: data.data.data, status: data.data.status}
}

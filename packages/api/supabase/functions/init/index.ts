import { wrapper } from "../_shared/wrapper.ts";

wrapper(async (req, { supabase }) => {
  const getUserResponse = await supabase.auth.getUser();

  const { name } = await req.json();

  const payload = {
    message: `Hello ${name}!`,
    data: getUserResponse.data,
  };

  return payload;
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
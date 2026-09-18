import { app } from '#loaders/server';
import { env } from '#loaders/environment';


app.listen(env.SERVER_PORT, () => {
  console.log(`Server is listening on port: ${env.SERVER_PORT}`);
});

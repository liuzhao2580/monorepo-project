import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from "@nestjs/platform-express"
import { AppModule } from "./app.module"
import { join } from "path"
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.setGlobalPrefix("api")
  app.useStaticAssets(join(__dirname, "/assets"), {
    prefix: "/static/",
    maxAge: 1000 * 60
  })
  await app.listen(6789)
}
bootstrap()

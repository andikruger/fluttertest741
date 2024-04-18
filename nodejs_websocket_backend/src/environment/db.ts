import { DataSourceOptions } from "typeorm/data-source/DataSourceOptions";
import { TextMessageEntity } from "../domain/entity/text-message-entity";
import { UserEntity } from "../domain/entity/user-entity";

export const dbDatasourceOptions: DataSourceOptions = {
  // TODO: replace with your database configuration in the fields bellow:
  type: "mongodb",
  url: "mongodb+srv://vitomzev:Assetmanager1@vitomzev-cluster.wv1np.mongodb.net/testChat127?retryWrites=true&w=majority",
  // No need to change this fields bellow
  synchronize: true,
  logging: false,

  entities: [TextMessageEntity, UserEntity],
  migrations: [],
  subscribers: [],
};

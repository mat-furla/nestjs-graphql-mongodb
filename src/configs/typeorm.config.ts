import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: 'mongodb://teste:teste@127.0.0.1:27017/nest',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    logging: true,
};

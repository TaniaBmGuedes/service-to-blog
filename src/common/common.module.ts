import { Module } from '@nestjs/common';
import { HashingService } from './hasing/hashig.service';
import { BcryptHashingService } from './hasing/bcrypt-hashing.service';

@Module({
  providers: [
    {
      provide: HashingService,
      useClass: BcryptHashingService,
    },
  ],
  exports: [HashingService],
})
export class CommonModule {}

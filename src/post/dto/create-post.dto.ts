import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Title must be a string' })
  @Length(10, 150, { message: 'Title needs to have between 10 e 150 chras' })
  title: string;

  @IsString({ message: 'excerpt must be a string' })
  @Length(10, 200, { message: 'excerpt needs to have between 10 e 200 chras' })
  excerpt: string;

  @IsString({ message: 'Content must be a string' })
  @IsNotEmpty({ message: 'Content can be empty' })
  content: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  @IsUrl({ require_tld: false }, { message: 'image url must be a valid URL' }) // Top level domain proíbe localhost e IP
  coverImageUrl?: string;
}

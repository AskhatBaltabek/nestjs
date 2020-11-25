import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1606289627337 implements MigrationInterface {
    name = 'SchemaSync1606289627337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffees" RENAME COLUMN "name" TO "title"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffees" RENAME COLUMN "title" TO "name"`);
    }

}

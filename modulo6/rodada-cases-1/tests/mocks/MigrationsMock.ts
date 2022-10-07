import { BaseDatabase } from "../../src/database/BaseDatabase"
import { ProductDatabaseMock } from "./ProductDatabaseMock"
import {productJson, tags, products_tags} from "./dataMock"

export class MigrationsMock extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ProductDatabaseMock.TABLE_ALL};
        DROP TABLE IF EXISTS ${ProductDatabaseMock.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${ProductDatabaseMock.TABLE_TAGS};
        
        CREATE TABLE IF NOT EXISTS ${ProductDatabaseMock.TABLE_PRODUCTS}(
            id INT NOT NULL PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabaseMock.TABLE_TAGS}(
            tags VARCHAR(255) NOT NULL PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabaseMock.TABLE_ALL}(
            id int,
	        tags VARCHAR(255),
            FOREIGN KEY (id) REFERENCES ${ProductDatabaseMock.TABLE_PRODUCTS}(id),
	        FOREIGN KEY (tags) REFERENCES ${ProductDatabaseMock.TABLE_TAGS}(tags)
        );
        `)
        
    }

    insertData = async () => {
        await BaseDatabase
            .connection(ProductDatabaseMock.TABLE_PRODUCTS)
            .insert(productJson)

        await BaseDatabase
            .connection(ProductDatabaseMock.TABLE_TAGS)
            .insert(tags)

        await BaseDatabase
            .connection(ProductDatabaseMock.TABLE_ALL)
            .insert(products_tags)
    }
}

// const migrations = new Migrations()
// migrations.execute()
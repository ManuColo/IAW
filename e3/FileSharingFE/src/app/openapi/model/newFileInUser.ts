/**
 * fsh
 * File server hosting
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: manuelcolombini@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<File, \'id\'>, \'userId\'>, schemaOptions: { title: \'NewFileInUser\', exclude: [ \'id\' ], optional: [ \'userId\' ] })
 */
export interface NewFileInUser { 
    name: string;
    size?: number;
    creationDate?: number;
    userId?: string;
}


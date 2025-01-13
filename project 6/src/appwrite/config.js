import conf from "../conf/conf";

import { Client, ID , Databases, Storage, Query} from "appwrite";




export class Service{
    Client = new Client();
    Databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases= new Databases(this.client)
        this.bucket=new Storage(this.client)

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabase_Id,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async updatePost (slug,{title, content, featuredImage, status}){

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabase_Id,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log(error );
            
        }

    }

    async deletePost(slug){
        try {

            await this.databases.deleteDocument(
                conf.appwriteDatabase_Id,
                conf.appwriteCollectionId,
                slug
            )

            return true
            
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPost(slug){
        try {

            await this.databases.getDocument(
                conf.appwriteDatabase_Id,
                conf.appwriteCollectionId,
                slug
            )

            return true
            
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPosts(){
        try {

            await this.databases.deleteDocument(
                conf.appwriteDatabase_Id,
                conf.appwriteCollectionId,
                
            )

            return true
            
        } catch (error) {
            console.log(error);
            return false
        }
    }
}



const service =new Service()
export default Service
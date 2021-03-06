"use strict";
var base_1 = require("./base");
var auth_1 = require("./auth");
var rest_resource_1 = require("./resources/rest/rest_resource");
var collection_1 = require("./resources/rest/collection");
var sample_1 = require("./resources/rest/sample");
var data_1 = require("./resources/rest/data");
var descriptor_schema_1 = require("./resources/rest/descriptor_schema");
var presample_1 = require("./resources/rest/presample");
var user_1 = require("./resources/rest/user");
var file_1 = require("./resources/rest/file");
var storage_1 = require("./resources/rest/storage");
var knowledge_base_1 = require("./resources/modules/knowledge_base");
var ResolweApi = (function () {
    function ResolweApi(connection, restUri, websocketUri) {
        this.connection = connection;
        this.Base = new base_1.Base(this.connection);
        this.Auth = new auth_1.Auth(this.connection);
        // Resolwe resources.
        this.User = new user_1.UserResource(this.connection);
        this.Collection = new collection_1.CollectionResource(this.connection);
        this.Data = new data_1.DataResource(this.connection);
        this.Process = new rest_resource_1.RESTResource('process', this.connection);
        this.DescriptorSchema = new descriptor_schema_1.DescriptorSchemaResource(this.connection);
        this.Sample = new sample_1.SampleResource(this.connection);
        this.Presample = new presample_1.PresampleResource(this.connection);
        this.File = new file_1.FileResource(this.connection);
        this.Storage = new storage_1.StorageResource(this.connection);
        this.KnowledgeBase = {
            Feature: new knowledge_base_1.FeatureResource(this.connection),
        };
        this.connect(restUri, websocketUri);
        this.Base.getCSRFCookie();
    }
    /**
     * Establishes a default connection with the genesis platform server.
     *
     * @param {string} uri Genesis platform server URI
     */
    ResolweApi.prototype.connect = function (restUri, websocketUri) {
        this.connection.connect(restUri, websocketUri);
    };
    return ResolweApi;
}());
exports.ResolweApi = ResolweApi;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLCtCQUE0QjtBQUM1QiwrQkFBNEI7QUFFNUIsZ0VBQTREO0FBQzVELDBEQUErRDtBQUMvRCxrREFBdUQ7QUFDdkQsOENBQW1EO0FBQ25ELHdFQUE0RTtBQUM1RSx3REFBNkQ7QUFDN0QsOENBQW1EO0FBQ25ELDhDQUFtRDtBQUNuRCxvREFBeUQ7QUFDekQscUVBQW1FO0FBSW5FO0lBbUJJLG9CQUFtQixVQUFzQixFQUFFLE9BQWUsRUFBRSxZQUFvQjtRQUE3RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBbEJsQyxTQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLFNBQUksR0FBUyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUMscUJBQXFCO1FBQ2QsU0FBSSxHQUFpQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELGVBQVUsR0FBdUIsSUFBSSwrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekUsU0FBSSxHQUFpQixJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELFlBQU8sR0FBZ0MsSUFBSSw0QkFBWSxDQUFnQixTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25HLHFCQUFnQixHQUE2QixJQUFJLDRDQUF3QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRixXQUFNLEdBQW1CLElBQUksdUJBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0QsY0FBUyxHQUFzQixJQUFJLDZCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RSxTQUFJLEdBQWlCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsWUFBTyxHQUFvQixJQUFJLHlCQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWhFLGtCQUFhLEdBQUc7WUFDbkIsT0FBTyxFQUFFLElBQUksZ0NBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2hELENBQUM7UUFHRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssNEJBQU8sR0FBZixVQUFnQixPQUFlLEVBQUUsWUFBb0I7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTCxpQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksZ0NBQVUiLCJmaWxlIjoiYXBpL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25uZWN0aW9ufSBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHtCYXNlfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtBdXRofSBmcm9tICcuL2F1dGgnO1xuXG5pbXBvcnQge1JFU1RSZXNvdXJjZX0gZnJvbSAnLi9yZXNvdXJjZXMvcmVzdC9yZXN0X3Jlc291cmNlJztcbmltcG9ydCB7Q29sbGVjdGlvblJlc291cmNlfSBmcm9tICcuL3Jlc291cmNlcy9yZXN0L2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtTYW1wbGVSZXNvdXJjZX0gZnJvbSAnLi9yZXNvdXJjZXMvcmVzdC9zYW1wbGUnO1xuaW1wb3J0IHtEYXRhUmVzb3VyY2V9IGZyb20gJy4vcmVzb3VyY2VzL3Jlc3QvZGF0YSc7XG5pbXBvcnQge0Rlc2NyaXB0b3JTY2hlbWFSZXNvdXJjZX0gZnJvbSAnLi9yZXNvdXJjZXMvcmVzdC9kZXNjcmlwdG9yX3NjaGVtYSc7XG5pbXBvcnQge1ByZXNhbXBsZVJlc291cmNlfSBmcm9tICcuL3Jlc291cmNlcy9yZXN0L3ByZXNhbXBsZSc7XG5pbXBvcnQge1VzZXJSZXNvdXJjZX0gZnJvbSAnLi9yZXNvdXJjZXMvcmVzdC91c2VyJztcbmltcG9ydCB7RmlsZVJlc291cmNlfSBmcm9tICcuL3Jlc291cmNlcy9yZXN0L2ZpbGUnO1xuaW1wb3J0IHtTdG9yYWdlUmVzb3VyY2V9IGZyb20gJy4vcmVzb3VyY2VzL3Jlc3Qvc3RvcmFnZSc7XG5pbXBvcnQge0ZlYXR1cmVSZXNvdXJjZX0gZnJvbSAnLi9yZXNvdXJjZXMvbW9kdWxlcy9rbm93bGVkZ2VfYmFzZSc7XG5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMvcmVzdCc7XG5cbmV4cG9ydCBjbGFzcyBSZXNvbHdlQXBpIHtcbiAgICBwdWJsaWMgQmFzZTogQmFzZSA9IG5ldyBCYXNlKHRoaXMuY29ubmVjdGlvbik7XG4gICAgcHVibGljIEF1dGg6IEF1dGggPSBuZXcgQXV0aCh0aGlzLmNvbm5lY3Rpb24pO1xuXG4gICAgLy8gUmVzb2x3ZSByZXNvdXJjZXMuXG4gICAgcHVibGljIFVzZXI6IFVzZXJSZXNvdXJjZSA9IG5ldyBVc2VyUmVzb3VyY2UodGhpcy5jb25uZWN0aW9uKTtcbiAgICBwdWJsaWMgQ29sbGVjdGlvbjogQ29sbGVjdGlvblJlc291cmNlID0gbmV3IENvbGxlY3Rpb25SZXNvdXJjZSh0aGlzLmNvbm5lY3Rpb24pO1xuICAgIHB1YmxpYyBEYXRhOiBEYXRhUmVzb3VyY2UgPSBuZXcgRGF0YVJlc291cmNlKHRoaXMuY29ubmVjdGlvbik7XG4gICAgcHVibGljIFByb2Nlc3M6IFJFU1RSZXNvdXJjZTx0eXBlcy5Qcm9jZXNzPiA9IG5ldyBSRVNUUmVzb3VyY2U8dHlwZXMuUHJvY2Vzcz4oJ3Byb2Nlc3MnLCB0aGlzLmNvbm5lY3Rpb24pO1xuICAgIHB1YmxpYyBEZXNjcmlwdG9yU2NoZW1hOiBEZXNjcmlwdG9yU2NoZW1hUmVzb3VyY2UgPSBuZXcgRGVzY3JpcHRvclNjaGVtYVJlc291cmNlKHRoaXMuY29ubmVjdGlvbik7XG4gICAgcHVibGljIFNhbXBsZTogU2FtcGxlUmVzb3VyY2UgPSBuZXcgU2FtcGxlUmVzb3VyY2UodGhpcy5jb25uZWN0aW9uKTtcbiAgICBwdWJsaWMgUHJlc2FtcGxlOiBQcmVzYW1wbGVSZXNvdXJjZSA9IG5ldyBQcmVzYW1wbGVSZXNvdXJjZSh0aGlzLmNvbm5lY3Rpb24pO1xuICAgIHB1YmxpYyBGaWxlOiBGaWxlUmVzb3VyY2UgPSBuZXcgRmlsZVJlc291cmNlKHRoaXMuY29ubmVjdGlvbik7XG4gICAgcHVibGljIFN0b3JhZ2U6IFN0b3JhZ2VSZXNvdXJjZSA9IG5ldyBTdG9yYWdlUmVzb3VyY2UodGhpcy5jb25uZWN0aW9uKTtcblxuICAgIHB1YmxpYyBLbm93bGVkZ2VCYXNlID0ge1xuICAgICAgICBGZWF0dXJlOiBuZXcgRmVhdHVyZVJlc291cmNlKHRoaXMuY29ubmVjdGlvbiksXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25uZWN0aW9uOiBDb25uZWN0aW9uLCByZXN0VXJpOiBzdHJpbmcsIHdlYnNvY2tldFVyaTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdChyZXN0VXJpLCB3ZWJzb2NrZXRVcmkpO1xuXG4gICAgICAgIHRoaXMuQmFzZS5nZXRDU1JGQ29va2llKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXN0YWJsaXNoZXMgYSBkZWZhdWx0IGNvbm5lY3Rpb24gd2l0aCB0aGUgZ2VuZXNpcyBwbGF0Zm9ybSBzZXJ2ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJpIEdlbmVzaXMgcGxhdGZvcm0gc2VydmVyIFVSSVxuICAgICAqL1xuICAgIHByaXZhdGUgY29ubmVjdChyZXN0VXJpOiBzdHJpbmcsIHdlYnNvY2tldFVyaTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5jb25uZWN0KHJlc3RVcmksIHdlYnNvY2tldFVyaSk7XG4gICAgfVxufVxuIl19

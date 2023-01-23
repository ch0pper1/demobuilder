"use strict";
/**
 * (C) Copyright IBM Corp. 2019, 2020.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * IBM OpenAPI SDK Code Generator Version: 99-SNAPSHOT-8d569e8f-20201103-112432
 */
var extend = require("extend");
var ibm_cloud_sdk_core_1 = require("ibm-cloud-sdk-core");
var common_1 = require("../lib/common");
/**
 * IBM Watson&trade; Discovery is a cognitive search and content analytics engine that you can add to applications to
 * identify patterns, trends and actionable insights to drive better decision-making. Securely unify structured and
 * unstructured data with pre-enriched content, and use a simplified query language to eliminate the need for manual
 * filtering of results.
 */
var DiscoveryV2 = /** @class */ (function (_super) {
    __extends(DiscoveryV2, _super);
    /**
     * Construct a DiscoveryV2 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - Release date of the version of the API you want to use. Specify dates in
     * YYYY-MM-DD format. The current version is `2019-11-22`.
     * @param {string} [options.serviceUrl] - The base url to use when contacting the service (e.g. 'https://api.us-south.discovery.watson.cloud.ibm.com'). The base url may differ between IBM Cloud regions.
     * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {string} [options.serviceName] - The name of the service to configure
     * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service. Defaults to environment if not set
     * @constructor
     * @returns {DiscoveryV2}
     */
    function DiscoveryV2(options) {
        var _this = this;
        options = options || {};
        var requiredParams = ['version'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(options, requiredParams);
        if (missingParams) {
            throw missingParams;
        }
        if (!options.serviceName) {
            options.serviceName = DiscoveryV2.DEFAULT_SERVICE_NAME;
        }
        // If the caller didn't supply an authenticator, construct one from external configuration.
        if (!options.authenticator) {
            options.authenticator = ibm_cloud_sdk_core_1.getAuthenticatorFromEnvironment(options.serviceName);
        }
        _this = _super.call(this, options) || this;
        _this.configureService(options.serviceName);
        if (options.serviceUrl) {
            _this.setServiceUrl(options.serviceUrl);
        }
        _this.version = options.version;
        return _this;
    }
    /*************************
     * collections
     ************************/
    /**
     * List collections.
     *
     * Lists existing collections for the specified project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.ListCollectionsResponse>>}
     */
    DiscoveryV2.prototype.listCollections = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'listCollections');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/collections',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Create a collection.
     *
     * Create a new collection in the specified project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.name - The name of the collection.
     * @param {string} [params.description] - A description of the collection.
     * @param {string} [params.language] - The language of the collection.
     * @param {CollectionEnrichment[]} [params.enrichments] - An array of enrichments that are applied to this collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.CollectionDetails>>}
     */
    DiscoveryV2.prototype.createCollection = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'name'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description,
            'language': _params.language,
            'enrichments': _params.enrichments
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'createCollection');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/collections',
                method: 'POST',
                body: body,
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Get collection.
     *
     * Get details about the specified collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.collectionId - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.CollectionDetails>>}
     */
    DiscoveryV2.prototype.getCollection = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'collectionId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'collection_id': _params.collectionId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'getCollection');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/collections/{collection_id}',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Update a collection.
     *
     * Updates the specified collection's name, description, and enrichments.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.collectionId - The ID of the collection.
     * @param {string} [params.name] - The name of the collection.
     * @param {string} [params.description] - A description of the collection.
     * @param {CollectionEnrichment[]} [params.enrichments] - An array of enrichments that are applied to this collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.CollectionDetails>>}
     */
    DiscoveryV2.prototype.updateCollection = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'collectionId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description,
            'enrichments': _params.enrichments
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'collection_id': _params.collectionId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'updateCollection');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/collections/{collection_id}',
                method: 'POST',
                body: body,
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Delete a collection.
     *
     * Deletes the specified collection from the project. All documents stored in the specified collection and not shared
     * is also deleted.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.collectionId - The ID of the collection.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Empty>>}
     */
    DiscoveryV2.prototype.deleteCollection = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'collectionId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'collection_id': _params.collectionId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteCollection');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/collections/{collection_id}',
                method: 'DELETE',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /*************************
     * queries
     ************************/
    /**
     * Query a project.
     *
     * By using this method, you can construct queries. For details, see the [Discovery
     * documentation](https://cloud.ibm.com/docs/discovery-data?topic=discovery-data-query-concepts). The default query
     * parameters are defined by the settings for this project, see the [Discovery
     * documentation](https://cloud.ibm.com/docs/discovery-data?topic=discovery-data-project-defaults) for an overview of
     * the standard default settings, and see [the Projects API documentation](#create-project) for details about how to
     * set custom default query settings.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string[]} [params.collectionIds] - A comma-separated list of collection IDs to be queried against.
     * @param {string} [params.filter] - A cacheable query that excludes documents that don't mention the query content.
     * Filter searches are better for metadata-type searches and for assessing the concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first. Use a query search when you want to find the most
     * relevant search results.
     * @param {string} [params.naturalLanguageQuery] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding.
     * @param {string} [params.aggregation] - An aggregation search that returns an exact answer by combining query search
     * with filters. Useful for applications to build lists, tables, and time series. For a full list of possible
     * aggregations, see the Query reference.
     * @param {number} [params.count] - Number of results to return.
     * @param {string[]} [params._return] - A list of the fields in the document hierarchy to return. If this parameter
     * not specified, then all top-level fields are returned.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10 and the offset is 8, it returns the last two results.
     * @param {string} [params.sort] - A comma-separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified. This parameter cannot be used in the same query as the **bias**
     * parameter.
     * @param {boolean} [params.highlight] - When `true`, a highlight field is returned for each result which contains the
     * fields which match the query with `<em></em>` tags around the matching query terms.
     * @param {boolean} [params.spellingSuggestions] - When `true` and the **natural_language_query** parameter is used,
     * the **natural_language_query** parameter is spell checked. The most likely correction is returned in the
     * **suggested_query** field of the response (if one exists).
     * @param {QueryLargeTableResults} [params.tableResults] - Configuration for table retrieval.
     * @param {QueryLargeSuggestedRefinements} [params.suggestedRefinements] - Configuration for suggested refinements.
     * @param {QueryLargePassages} [params.passages] - Configuration for passage retrieval.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.QueryResponse>>}
     */
    DiscoveryV2.prototype.query = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            'collection_ids': _params.collectionIds,
            'filter': _params.filter,
            'query': _params.query,
            'natural_language_query': _params.naturalLanguageQuery,
            'aggregation': _params.aggregation,
            'count': _params.count,
            'return': _params._return,
            'offset': _params.offset,
            'sort': _params.sort,
            'highlight': _params.highlight,
            'spelling_suggestions': _params.spellingSuggestions,
            'table_results': _params.tableResults,
            'suggested_refinements': _params.suggestedRefinements,
            'passages': _params.passages
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'query');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/query',
                method: 'POST',
                body: body,
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Get Autocomplete Suggestions.
     *
     * Returns completion query suggestions for the specified prefix.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.prefix - The prefix to use for autocompletion. For example, the prefix `Ho` could
     * autocomplete to `Hot`, `Housing`, or `How do I upgrade`. Possible completions are.
     * @param {string[]} [params.collectionIds] - Comma separated list of the collection IDs. If this parameter is not
     * specified, all collections in the project are used.
     * @param {string} [params.field] - The field in the result documents that autocompletion suggestions are identified
     * from.
     * @param {number} [params.count] - The number of autocompletion suggestions to return.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Completions>>}
     */
    DiscoveryV2.prototype.getAutocompletion = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'prefix'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version,
            'prefix': _params.prefix,
            'collection_ids': _params.collectionIds,
            'field': _params.field,
            'count': _params.count
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'getAutocompletion');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/autocompletion',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Query system notices.
     *
     * Queries for notices (errors or warnings) that might have been generated by the system. Notices are generated when
     * ingesting documents and performing relevance training.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} [params.filter] - A cacheable query that excludes documents that don't mention the query content.
     * Filter searches are better for metadata-type searches and for assessing the concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first.
     * @param {string} [params.naturalLanguageQuery] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding.
     * @param {number} [params.count] - Number of results to return. The maximum for the **count** and **offset** values
     * together in any one query is **10000**.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10 and the offset is 8, it returns the last two results. The maximum for the
     * **count** and **offset** values together in any one query is **10000**.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.QueryNoticesResponse>>}
     */
    DiscoveryV2.prototype.queryNotices = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version,
            'filter': _params.filter,
            'query': _params.query,
            'natural_language_query': _params.naturalLanguageQuery,
            'count': _params.count,
            'offset': _params.offset
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'queryNotices');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/notices',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * List fields.
     *
     * Gets a list of the unique fields (and their types) stored in the the specified collections.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string[]} [params.collectionIds] - Comma separated list of the collection IDs. If this parameter is not
     * specified, all collections in the project are used.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.ListFieldsResponse>>}
     */
    DiscoveryV2.prototype.listFields = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version,
            'collection_ids': _params.collectionIds
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'listFields');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/fields',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /*************************
     * componentSettings
     ************************/
    /**
     * List component settings.
     *
     * Returns default configuration settings for components.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.ComponentSettingsResponse>>}
     */
    DiscoveryV2.prototype.getComponentSettings = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'getComponentSettings');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/component_settings',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /*************************
     * documents
     ************************/
    /**
     * Add a document.
     *
     * Add a document to a collection with optional metadata.
     *
     *  Returns immediately after the system has accepted the document for processing.
     *
     *   * The user must provide document content, metadata, or both. If the request is missing both document content and
     * metadata, it is rejected.
     *
     *   * The user can set the **Content-Type** parameter on the **file** part to indicate the media type of the
     * document. If the **Content-Type** parameter is missing or is one of the generic media types (for example,
     * `application/octet-stream`), then the service attempts to automatically detect the document's media type.
     *
     *   * The following field names are reserved and will be filtered out if present after normalization: `id`, `score`,
     * `highlight`, and any field with the prefix of: `_`, `+`, or `-`
     *
     *   * Fields with empty name values after normalization are filtered out before indexing.
     *
     *   * Fields containing the following characters after normalization are filtered out before indexing: `#` and `,`
     *
     *   If the document is uploaded to a collection that has it's data shared with another collection, the
     * **X-Watson-Discovery-Force** header must be set to `true`.
     *
     *  **Note:** Documents can be added with a specific **document_id** by using the
     * **_/v2/projects/{project_id}/collections/{collection_id}/documents** method.
     *
     * **Note:** This operation only works on collections created to accept direct file uploads. It cannot be used to
     * modify a collection that connects to an external source such as Microsoft SharePoint.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.collectionId - The ID of the collection.
     * @param {NodeJS.ReadableStream|Buffer} [params.file] - The content of the document to ingest. The maximum supported
     * file size when adding a file to a collection is 50 megabytes, the maximum supported file size when testing a
     * configuration is 1 megabyte. Files larger than the supported size are rejected.
     * @param {string} [params.filename] - The filename for file.
     * @param {string} [params.fileContentType] - The content type of file.
     * @param {string} [params.metadata] - The maximum supported metadata file size is 1 MB. Metadata parts larger than 1
     * MB are rejected.
     *
     *
     * Example:  ``` {
     *   "Creator": "Johnny Appleseed",
     *   "Subject": "Apples"
     * } ```.
     * @param {boolean} [params.xWatsonDiscoveryForce] - When `true`, the uploaded document is added to the collection
     * even if the data for that collection is shared with other collections.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.DocumentAccepted>>}
     */
    DiscoveryV2.prototype.addDocument = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'collectionId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var formData = {
            'file': {
                data: _params.file,
                filename: _params.filename,
                contentType: _params.fileContentType
            },
            'metadata': _params.metadata
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'collection_id': _params.collectionId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'addDocument');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/collections/{collection_id}/documents',
                method: 'POST',
                qs: query,
                path: path,
                formData: formData
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'X-Watson-Discovery-Force': _params.xWatsonDiscoveryForce
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Update a document.
     *
     * Replace an existing document or add a document with a specified **document_id**. Starts ingesting a document with
     * optional metadata.
     *
     * If the document is uploaded to a collection that has it's data shared with another collection, the
     * **X-Watson-Discovery-Force** header must be set to `true`.
     *
     * **Note:** When uploading a new document with this method it automatically replaces any document stored with the
     * same **document_id** if it exists.
     *
     * **Note:** This operation only works on collections created to accept direct file uploads. It cannot be used to
     * modify a collection that connects to an external source such as Microsoft SharePoint.
     *
     * **Note:** If an uploaded document is segmented, all segments will be overwritten, even if the updated version of
     * the document has fewer segments.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.collectionId - The ID of the collection.
     * @param {string} params.documentId - The ID of the document.
     * @param {NodeJS.ReadableStream|Buffer} [params.file] - The content of the document to ingest. The maximum supported
     * file size when adding a file to a collection is 50 megabytes, the maximum supported file size when testing a
     * configuration is 1 megabyte. Files larger than the supported size are rejected.
     * @param {string} [params.filename] - The filename for file.
     * @param {string} [params.fileContentType] - The content type of file.
     * @param {string} [params.metadata] - The maximum supported metadata file size is 1 MB. Metadata parts larger than 1
     * MB are rejected.
     *
     *
     * Example:  ``` {
     *   "Creator": "Johnny Appleseed",
     *   "Subject": "Apples"
     * } ```.
     * @param {boolean} [params.xWatsonDiscoveryForce] - When `true`, the uploaded document is added to the collection
     * even if the data for that collection is shared with other collections.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.DocumentAccepted>>}
     */
    DiscoveryV2.prototype.updateDocument = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'collectionId', 'documentId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var formData = {
            'file': {
                data: _params.file,
                filename: _params.filename,
                contentType: _params.fileContentType
            },
            'metadata': _params.metadata
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'collection_id': _params.collectionId,
            'document_id': _params.documentId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'updateDocument');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/collections/{collection_id}/documents/{document_id}',
                method: 'POST',
                qs: query,
                path: path,
                formData: formData
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'X-Watson-Discovery-Force': _params.xWatsonDiscoveryForce
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Delete a document.
     *
     * If the given document ID is invalid, or if the document is not found, then the a success response is returned (HTTP
     * status code `200`) with the status set to 'deleted'.
     *
     * **Note:** This operation only works on collections created to accept direct file uploads. It cannot be used to
     * modify a collection that connects to an external source such as Microsoft SharePoint.
     *
     * **Note:** Segments of an uploaded document cannot be deleted individually. Delete all segments by deleting using
     * the `parent_document_id` of a segment result.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.collectionId - The ID of the collection.
     * @param {string} params.documentId - The ID of the document.
     * @param {boolean} [params.xWatsonDiscoveryForce] - When `true`, the uploaded document is added to the collection
     * even if the data for that collection is shared with other collections.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.DeleteDocumentResponse>>}
     */
    DiscoveryV2.prototype.deleteDocument = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'collectionId', 'documentId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'collection_id': _params.collectionId,
            'document_id': _params.documentId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteDocument');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/collections/{collection_id}/documents/{document_id}',
                method: 'DELETE',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'X-Watson-Discovery-Force': _params.xWatsonDiscoveryForce
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /*************************
     * trainingData
     ************************/
    /**
     * List training queries.
     *
     * List the training queries for the specified project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.TrainingQuerySet>>}
     */
    DiscoveryV2.prototype.listTrainingQueries = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'listTrainingQueries');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/training_data/queries',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * List curations.
     *
     * List the curations for the specified project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.TrainingQuerySet>>}
     */
    DiscoveryV2.prototype.listCurations = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'listCurations');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/curations',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Delete training queries.
     *
     * Removes all training queries for the specified project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Empty>>}
     */
    DiscoveryV2.prototype.deleteTrainingQueries = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteTrainingQueries');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/training_data/queries',
                method: 'DELETE',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Delete training queries.
     *
     * Removes all training queries for the specified project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Empty>>}
     */
    DiscoveryV2.prototype.deleteCuration = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'curationId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'curation_id': _params.curationId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteTrainingQueries');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/curations/{curation_id}/',
                method: 'DELETE',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Create createCuration.
     *
     * Add a query to the training data for this project. The query can contain a filter and natural language query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.naturalLanguageQuery - The natural text query for the training query.
     * @param {CurationResult[]} params.curated_results - Array of curations.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.TrainingQuery>>}
     */
    DiscoveryV2.prototype.createCuration = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'naturalLanguageQuery', 'curated_results'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            'natural_language_query': _params.naturalLanguageQuery,
            'curated_results': _params.curated_results
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'createCuration');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/curations',
                method: 'POST',
                body: body,
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Create training query.
     *
     * Add a query to the training data for this project. The query can contain a filter and natural language query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.naturalLanguageQuery - The natural text query for the training query.
     * @param {TrainingExample[]} params.examples - Array of training examples.
     * @param {string} [params.filter] - The filter used on the collection before the **natural_language_query** is
     * applied.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.TrainingQuery>>}
     */
    DiscoveryV2.prototype.createTrainingQuery = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'naturalLanguageQuery', 'examples'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            'natural_language_query': _params.naturalLanguageQuery,
            'examples': _params.examples,
            'filter': _params.filter
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'createTrainingQuery');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/training_data/queries',
                method: 'POST',
                body: body,
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Get a training data query.
     *
     * Get details for a specific training data query, including the query string and all examples.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.queryId - The ID of the query used for training.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.TrainingQuery>>}
     */
    DiscoveryV2.prototype.getTrainingQuery = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'queryId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'query_id': _params.queryId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'getTrainingQuery');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/training_data/queries/{query_id}',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Update a training query.
     *
     * Updates an existing training query and it's examples.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.queryId - The ID of the query used for training.
     * @param {string} params.naturalLanguageQuery - The natural text query for the training query.
     * @param {TrainingExample[]} params.examples - Array of training examples.
     * @param {string} [params.filter] - The filter used on the collection before the **natural_language_query** is
     * applied.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.TrainingQuery>>}
     */
    DiscoveryV2.prototype.updateTrainingQuery = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'queryId', 'naturalLanguageQuery', 'examples'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            'natural_language_query': _params.naturalLanguageQuery,
            'examples': _params.examples,
            'filter': _params.filter
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'query_id': _params.queryId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'updateTrainingQuery');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/training_data/queries/{query_id}',
                method: 'POST',
                body: body,
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Update a curation.
     *
     * Updates an existing curation and it's examples.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.curationId - The ID of the query used for training.
     * @param {string} params.documentId - The documentId.
     * @param {string} params.collectionId - The collectionId
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Curation>>}
     */
    DiscoveryV2.prototype.updateCuration = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'curationId', 'documentId', 'collectionId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            document_id: _params.documentId,
            collection_id: _params.collectionId
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'curation_id': _params.curationId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'updateCurataion');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/curations/{curation_id}/curated_results',
                method: 'POST',
                body: body,
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /*************************
     * analyze
     ************************/
    /**
     * Analyze a Document.
     *
     * Process a document using the specified collection's settings and return it for realtime use.
     *
     * **Note:** Documents processed using this method are not added to the specified collection.
     *
     * **Note:** This method is only supported on IBM Cloud Pak for Data instances of Discovery.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.collectionId - The ID of the collection.
     * @param {NodeJS.ReadableStream|Buffer} [params.file] - The content of the document to ingest. The maximum supported
     * file size when adding a file to a collection is 50 megabytes, the maximum supported file size when testing a
     * configuration is 1 megabyte. Files larger than the supported size are rejected.
     * @param {string} [params.filename] - The filename for file.
     * @param {string} [params.fileContentType] - The content type of file.
     * @param {string} [params.metadata] - The maximum supported metadata file size is 1 MB. Metadata parts larger than 1
     * MB are rejected.
     *
     *
     * Example:  ``` {
     *   "Creator": "Johnny Appleseed",
     *   "Subject": "Apples"
     * } ```.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.AnalyzedDocument>>}
     */
    DiscoveryV2.prototype.analyzeDocument = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'collectionId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var formData = {
            'file': {
                data: _params.file,
                filename: _params.filename,
                contentType: _params.fileContentType
            },
            'metadata': _params.metadata
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'collection_id': _params.collectionId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'analyzeDocument');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/collections/{collection_id}/analyze',
                method: 'POST',
                qs: query,
                path: path,
                formData: formData
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /*************************
     * enrichments
     ************************/
    /**
     * List Enrichments.
     *
     * List the enrichments available to this project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Enrichments>>}
     */
    DiscoveryV2.prototype.listEnrichments = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'listEnrichments');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/enrichments',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Create an enrichment.
     *
     * Create an enrichment for use with the specified project/.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {CreateEnrichment} params.enrichment -
     * @param {NodeJS.ReadableStream|Buffer} [params.file] - The enrichment file to upload.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Enrichment>>}
     */
    DiscoveryV2.prototype.createEnrichment = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'enrichment'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var formData = {
            'enrichment': _params.enrichment,
            'file': {
                data: _params.file,
                contentType: 'application/octet-stream'
            }
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'createEnrichment');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/enrichments',
                method: 'POST',
                qs: query,
                path: path,
                formData: formData
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Get enrichment.
     *
     * Get details about a specific enrichment.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.enrichmentId - The ID of the enrichment.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Enrichment>>}
     */
    DiscoveryV2.prototype.getEnrichment = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'enrichmentId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'enrichment_id': _params.enrichmentId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'getEnrichment');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/enrichments/{enrichment_id}',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Update an enrichment.
     *
     * Updates an existing enrichment's name and description.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.enrichmentId - The ID of the enrichment.
     * @param {string} params.name - A new name for the enrichment.
     * @param {string} [params.description] - A new description for the enrichment.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Enrichment>>}
     */
    DiscoveryV2.prototype.updateEnrichment = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'enrichmentId', 'name'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            'name': _params.name,
            'description': _params.description
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'enrichment_id': _params.enrichmentId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'updateEnrichment');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/enrichments/{enrichment_id}',
                method: 'POST',
                body: body,
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Delete an enrichment.
     *
     * Deletes an existing enrichment from the specified project.
     *
     * **Note:** Only enrichments that have been manually created can be deleted.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} params.enrichmentId - The ID of the enrichment.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Empty>>}
     */
    DiscoveryV2.prototype.deleteEnrichment = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId', 'enrichmentId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId,
            'enrichment_id': _params.enrichmentId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteEnrichment');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}/enrichments/{enrichment_id}',
                method: 'DELETE',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /*************************
     * projects
     ************************/
    /**
     * List projects.
     *
     * Lists existing projects for this instance.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.ListProjectsResponse>>}
     */
    DiscoveryV2.prototype.listProjects = function (params) {
        var _params = Object.assign({}, params);
        var query = {
            'version': this.version
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'listProjects');
        var parameters = {
            options: {
                url: '/v2/projects',
                method: 'GET',
                qs: query,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Create a Project.
     *
     * Create a new project for this instance.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.name - The human readable name of this project.
     * @param {string} params.type - The project type of this project.
     * @param {DefaultQueryParams} [params.defaultQueryParameters] - Default query parameters for this project.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.ProjectDetails>>}
     */
    DiscoveryV2.prototype.createProject = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['name', 'type'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            'name': _params.name,
            'type': _params.type,
            'default_query_parameters': _params.defaultQueryParameters
        };
        var query = {
            'version': this.version
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'createProject');
        var parameters = {
            options: {
                url: '/v2/projects',
                method: 'POST',
                body: body,
                qs: query,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Get project.
     *
     * Get details on the specified project.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.ProjectDetails>>}
     */
    DiscoveryV2.prototype.getProject = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'getProject');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}',
                method: 'GET',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Update a project.
     *
     * Update the specified project's name.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {string} [params.name] - The new name to give this project.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.ProjectDetails>>}
     */
    DiscoveryV2.prototype.updateProject = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var body = {
            'name': _params.name
        };
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'updateProject');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}',
                method: 'POST',
                body: body,
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /**
     * Delete a project.
     *
     * Deletes the specified project.
     *
     * **Important:** Deleting a project deletes everything that is part of the specified project, including all
     * collections.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.projectId - The ID of the project. This information can be found from the deploy page of the
     * Discovery administrative tooling.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Empty>>}
     */
    DiscoveryV2.prototype.deleteProject = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['projectId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version
        };
        var path = {
            'project_id': _params.projectId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteProject');
        var parameters = {
            options: {
                url: '/v2/projects/{project_id}',
                method: 'DELETE',
                qs: query,
                path: path,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    /*************************
     * userData
     ************************/
    /**
     * Delete labeled data.
     *
     * Deletes all data associated with a specified customer ID. The method has no effect if no data is associated with
     * the customer ID.
     *
     * You associate a customer ID with data by passing the **X-Watson-Metadata** header with a request that passes data.
     * For more information about personal data and customer IDs, see [Information
     * security](https://cloud.ibm.com/docs/discovery-data?topic=discovery-data-information-security#information-security).
     *
     *
     * **Note:** This method is only supported on IBM Cloud instances of Discovery.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customerId - The customer ID for which all data is to be deleted.
     * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
     * @returns {Promise<DiscoveryV2.Response<DiscoveryV2.Empty>>}
     */
    DiscoveryV2.prototype.deleteUserData = function (params) {
        var _params = Object.assign({}, params);
        var requiredParams = ['customerId'];
        var missingParams = ibm_cloud_sdk_core_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return Promise.reject(missingParams);
        }
        var query = {
            'version': this.version,
            'customer_id': _params.customerId
        };
        var sdkHeaders = common_1.getSdkHeaders(DiscoveryV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteUserData');
        var parameters = {
            options: {
                url: '/v2/user_data',
                method: 'DELETE',
                qs: query,
            },
            defaultOptions: extend(true, {}, this.baseOptions, {
                headers: extend(true, sdkHeaders, {}, _params.headers),
            }),
        };
        return this.createRequest(parameters);
    };
    ;
    DiscoveryV2.DEFAULT_SERVICE_URL = 'https://api.us-south.discovery.watson.cloud.ibm.com';
    DiscoveryV2.DEFAULT_SERVICE_NAME = 'discovery';
    return DiscoveryV2;
}(ibm_cloud_sdk_core_1.BaseService));
/*************************
 * interfaces
 ************************/
(function (DiscoveryV2) {
    /** Constants for the `addDocument` operation. */
    var AddDocumentConstants;
    (function (AddDocumentConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_JSON"] = "application/json";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["TEXT_HTML"] = "text/html";
            FileContentType["APPLICATION_XHTML_XML"] = "application/xhtml+xml";
        })(FileContentType = AddDocumentConstants.FileContentType || (AddDocumentConstants.FileContentType = {}));
    })(AddDocumentConstants = DiscoveryV2.AddDocumentConstants || (DiscoveryV2.AddDocumentConstants = {}));
    /** Constants for the `updateDocument` operation. */
    var UpdateDocumentConstants;
    (function (UpdateDocumentConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_JSON"] = "application/json";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["TEXT_HTML"] = "text/html";
            FileContentType["APPLICATION_XHTML_XML"] = "application/xhtml+xml";
        })(FileContentType = UpdateDocumentConstants.FileContentType || (UpdateDocumentConstants.FileContentType = {}));
    })(UpdateDocumentConstants = DiscoveryV2.UpdateDocumentConstants || (DiscoveryV2.UpdateDocumentConstants = {}));
    /** Constants for the `analyzeDocument` operation. */
    var AnalyzeDocumentConstants;
    (function (AnalyzeDocumentConstants) {
        /** The content type of file. */
        var FileContentType;
        (function (FileContentType) {
            FileContentType["APPLICATION_JSON"] = "application/json";
            FileContentType["APPLICATION_MSWORD"] = "application/msword";
            FileContentType["APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            FileContentType["APPLICATION_PDF"] = "application/pdf";
            FileContentType["TEXT_HTML"] = "text/html";
            FileContentType["APPLICATION_XHTML_XML"] = "application/xhtml+xml";
        })(FileContentType = AnalyzeDocumentConstants.FileContentType || (AnalyzeDocumentConstants.FileContentType = {}));
    })(AnalyzeDocumentConstants = DiscoveryV2.AnalyzeDocumentConstants || (DiscoveryV2.AnalyzeDocumentConstants = {}));
    /** Constants for the `createProject` operation. */
    var CreateProjectConstants;
    (function (CreateProjectConstants) {
        /** The project type of this project. */
        var Type;
        (function (Type) {
            Type["DOCUMENT_RETRIEVAL"] = "document_retrieval";
            Type["ANSWER_RETRIEVAL"] = "answer_retrieval";
            Type["CONTENT_MINING"] = "content_mining";
            Type["OTHER"] = "other";
        })(Type = CreateProjectConstants.Type || (CreateProjectConstants.Type = {}));
    })(CreateProjectConstants = DiscoveryV2.CreateProjectConstants || (DiscoveryV2.CreateProjectConstants = {}));
})(DiscoveryV2 || (DiscoveryV2 = {}));
module.exports = DiscoveryV2;

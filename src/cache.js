const CACHE_FILE = ".embeddings.cache.json";

export default class Cache {
    constructor(cache_file = CACHE_FILE) {
        this.cache = {}; // Use in-memory cache
        // this.cache_file = cache_file; // The cache file path is no longer needed
    }

    async load() {
        // In-memory cache doesn't need to load from a file, so this function is now empty
        // If you need to persist data, consider using an alternative storage method
    }

    async save() {
        // In-memory cache doesn't need to save to a file, so this function is now empty
        // If you need to persist data, consider using an alternative storage method
    }

    async set(key, value, model) {
        this.cache[`${key}-${model}`] = value;
        // No need to save to a file since we're using in-memory storage
    }

    async get(key, model) {
        return this.cache[`${key}-${model}`] || null;
    }
}

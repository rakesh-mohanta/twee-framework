module.exports = {
    "passport": {
        "enabled": true
    },

    "l10n": {
        "throwOnMissingTranslation": false
    },

    "extensions": {
        "Basic HTTP Parsers": {
            "module": "twee-extensions/http/parsers"
        },

        "Responses In Formats": {
            "module": "twee-extensions/http/responses"
        },

        "Winston Logger": {
            "module": "twee-extensions/logging/winston"
        },

        "Twee Custom Headers": {
            "module": "twee-extensions/http/headers/requested-with"
        },

        "Static Files Serving": {
            "module": "twee-extensions/http/static"
        },

        "Twee Session": {
            "module": "twee-extensions/http/session",
            "disabled": true
        },

        "Twee Compressor": {
            "module": "twee-extensions/http/compressor"
        },

        "View Engine": {
            "module": "twee-extensions/view/engine/swig"
        },

        "View Helpers": {
            "module": "twee-extensions/view/helpers"
        },

        "Twee Passport": {
            "module": "twee-extensions/http/session/passport",
            "disabled": true
        }
    },

    "options": {
        "compressHtml": true,
        "gzipHtml": true,

        "staticFiles": {
            "directory": "public"
        },

        "logging": {
            "winston": {
                "accessFile": "var/log/access.json",
                "exceptionsFile": "var/log/exceptions.json",
                "exitOnError": false
            }
        },

        "favicon": {
            "file": "/public/favicon.ico"
        },

        "bodyParser": {
            "urlencoded": {
                "extended": false
            }
        },

        "session": {
            "enabled": true,
            "options": {
                "secret": "expR3ssS3cR3TASD:Fwfk%$^$%&*&",
                "cookie": {
                    "secure": false,
                    "maxAge": 999999999999,
                    "signed": true,
                    "path": "/"
                },
                "resave": true,
                "saveUninitialized": true
            }
        },

        "viewEngine": {
            "swig": {
                "engineExtension": "html",
                "options": {
                    "cache": null
                }
            },
            "jade": {
                "engineExtension": "jade",
                "options": {
                    "pretty": true,
                    "compileDebug": false
                }
            },
            "disabled": false
        },

        "cache": {
            "redis": {
                "host": "127.0.0.1",
                "port": 6379
            },
            "memcache": {}
        }
    }
};
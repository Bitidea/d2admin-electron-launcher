module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                mac: {
                    target: "dmg"
                },
                win: {
                    target: "7z"
                },
                linux: {
                    target: "AppImage"
                }
            }
        }
    }
}
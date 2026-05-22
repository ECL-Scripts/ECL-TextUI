local TextUIVisible = false

local function ShowTextUI(data)

    if TextUIVisible then return end

    TextUIVisible = true

    SendNUIMessage({

        action = 'show',

        key = data.key or 'E',

        text = data.text or 'Interact',

        color = Config.Color,
        
        position = Config.Position
    })

end

local function HideTextUI()

    if not TextUIVisible then return end

    TextUIVisible = false

    SendNUIMessage({

        action = 'hide'
    })

end

exports('Show', function(data)

    ShowTextUI(data)

end)

exports('Hide', function()

    HideTextUI()

end)

--[[ RegisterCommand('showtextui', function()

    exports['ECL-TextUI']:Show({

        key = 'E',

        text = 'Example'
    })

end)

RegisterCommand('hidetextui', function()

    exports['ECL-TextUI']:Hide()

end) ]]
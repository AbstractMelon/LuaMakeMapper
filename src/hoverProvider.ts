import * as vscode from 'vscode';

export class LuaHoverProvider implements vscode.HoverProvider {
    // Documentation for custom functions
    private functionDocs: { [key: string]: string } = {
    // Game Functions
    "SpawnArrow": 
        `**\`\`\`lua SpawnArrow(posX, posY, scale, StartVelX, StartVelY, Red, Green, Blue, Alpha)\`\`\`**  
        Spawns an arrow.`,

    "SpawnGrenade": 
        `**SpawnGrenade(posX, posY, scale, StartVelX, StartVelY, StartAngularVelocity)**  
        Spawns a grenade.`,

    "SpawnAbilityPickup": 
        `**SpawnAbilityPickup(posX, posY, scale, StartVelX, StartVelY)**  
        Spawns an ability pickup.`,

    "SpawnSmokeGrenade": 
        `**SpawnSmokeGrenade(posX, posY, scale, StartVelX, StartVelY, StartAngularVelocity)**  
        Spawns a smoke grenade.`,

    "SpawnExplosion": 
        `**SpawnExplosion(posX, posY, scale)**  
        Spawns an explosion.`,

    "SpawnBoulder": 
        `**SpawnBoulder(posX, posY, scale, StartVelX, StartVelY, StartAngularVelocity, type, R, G, B, A)**  
        Spawns a boulder.`,

    "SpawnPlatform": 
        `**SpawnPlatform(posX, posY, Width, Height, Radius, Rot, R, G, B, A)**  
        Spawns a platform.`,

    "RaycastRoundedRect": 
        `**RaycastRoundedRect(posX, posY, angle, maxDist)**  
        Sends a raycast and returns the distance traveled before hitting anything.`,

    "GetClosestPlayer": 
        `**GetClosestPlayer(posX, posY)**  
        Gets the closest player to the given position.`,

    "GetAllPlatforms": 
        `**GetAllPlatforms()**  
        Returns the number of platforms and all platforms.`,

    "GetAllPlayers": 
        `**GetAllPlayers()**  
        Returns the number of players and all players.`,

    "GetAllBoplBodys": 
        `**GetAllBoplBodys()**  
        Returns the number of BoplBodys and all BoplBodys.`,

    "ShootBlink": 
        `**ShootBlink(posX, posY, Angle, minPlayerDuration, WallDuration, WallDelay, WallShake)**  
        Shoots a blink.`,

    "ShootGrow": 
        `**ShootGrow(posX, posY, Angle, ScaleMultiplyer, PlayerMultiplyer, blackHoleGrowth)**  
        Shoots a grow.`,

    "ShootShrink": 
        `**ShootShrink(posX, posY, Angle, ScaleMultiplyer, PlayerMultiplyer, blackHoleGrowth)**  
        Shoots a shrink.`,

    "GetDeltaTime": 
        `**GetDeltaTime()**  
        Returns the time in seconds that has passed since the last frame.`,

    "GetTimeSinceLevelLoad": 
        `**GetTimeSinceLevelLoad()**  
        Returns the time since the level loaded.`,

    "IsTimeStopped": 
        `**IsTimeStopped()**  
        Returns true if time is stopped.`,

    "GetInputValueWithId": 
        `**GetInputValueWithId(id)**  
        Gets the value of the logic gate input with that id.`,

    "SetOutputWithId": 
        `**SetOutputWithId(id, value)**  
        Sets the value of the logic gate's output with that id.`,

    "GetFileFromMapFile": 
        `**GetFileFromMapFile(FileName)**  
        Gets a file from inside the map file with the given name.`,

    // Player Functions
    "Player.GetSpeed": 
        `**Player.GetSpeed()**  
        Returns the speed of the player.`,

    "Player.GetGroundedSpeed": 
        `**Player.GetGroundedSpeed()**  
        Returns the grounded speed of the player.`,

    "Player.GetMaxSpeed": 
        `**Player.GetMaxSpeed()**  
        Returns the maximum speed of the player.`,

    "Player.GetJumpStrength": 
        `**Player.GetJumpStrength()**  
        Returns the jump strength of the player.`,

    "Player.GetAccel": 
        `**Player.GetAccel()**  
        Returns the acceleration of the player.`,

    "Player.GetGravityAccel": 
        `**Player.GetGravityAccel()**  
        Returns the gravity acceleration of the player.`,

    "Player.GetGravityMaxFallSpeed": 
        `**Player.GetGravityMaxFallSpeed()**  
        Returns the maximum fall speed of the player.`,

    "Player.GetJumpExtraXStrength": 
        `**Player.GetJumpExtraXStrength()**  
        Returns the extra jump X strength of the player.`,

    "Player.GetJumpKeptMomentum": 
        `**Player.GetJumpKeptMomentum()**  
        Returns the kept momentum during a jump.`,

    "Player.GetAirAccel": 
        `**Player.GetAirAccel()**  
        Returns the air acceleration of the player.`,

    "Player.GetMass": 
        `**Player.GetMass()**  
        Returns the mass of the player.`,

    "Player.GetPosition": 
        `**Player.GetPosition()**  
        Returns the position of the player.`,

    "Player.SetPosition": 
        `**Player.SetPosition(PosX, PosY)**  
        Sets the position of the player.`,

    "Player.SetSpeed": 
        `**Player.SetSpeed(NewValue)**  
        Sets the speed of the player.`,

    "Player.SetGroundedSpeed": 
        `**Player.SetGroundedSpeed(NewValue)**  
        Sets the grounded speed of the player.`,

    "Player.SetMaxSpeed": 
        `**Player.SetMaxSpeed(NewValue)**  
        Sets the maximum speed of the player.`,

    "Player.SetJumpStrength": 
        `**Player.SetJumpStrength(NewValue)**  
        Sets the jump strength of the player.`,

    "Player.SetAccel": 
        `**Player.SetAccel(NewValue)**  
        Sets the acceleration of the player.`,

    "Player.SetGravityAccel": 
        `**Player.SetGravityAccel(NewValue)**  
        Sets the gravity acceleration of the player.`,

    "Player.SetGravityMaxFallSpeed": 
        `**Player.SetGravityMaxFallSpeed(NewValue)**  
        Sets the maximum fall speed of the player.`,

    "Player.SetJumpExtraXStrength": 
        `**Player.SetJumpExtraXStrength(NewValue)**  
        Sets the extra jump X strength of the player.`,

    "Player.SetJumpKeptMomentum": 
        `**Player.SetJumpKeptMomentum(NewValue)**  
        Sets the jump kept momentum of the player.`,

    "Player.SetAirAccel": 
        `**Player.SetAirAccel(NewValue)**  
        Sets the air acceleration of the player.`,

    "Player.SetMass": 
        `**Player.SetMass(NewValue)**  
        Sets the mass of the player.`,

    "Player.AddForce": 
        `**Player.AddForce(ForceX, ForceY)**  
        Adds force to the player.`,

    "Player.GetAbility": 
        `**Player.GetAbility(index)**  
        Gets the ability in that slot (valid indexes: 1, 2, 3).`,

    "Player.SetAbility": 
        `**Player.SetAbility(index, ability, PlayAbilityPickupSound)**  
        Sets the ability in that slot.`,

    "Player.GetAbilityCount": 
        `**Player.GetAbilityCount()**  
        Returns the number of abilities the player has.`,

    "Player.GetAbilityCooldownRemaining": 
        `**Player.GetAbilityCooldownRemaining(index)**  
        Returns the remaining cooldown for the ability in that slot.`,

    "Player.SetAbilityCooldownRemaining": 
        `**Player.SetAbilityCooldownRemaining(index, NewRemainingCooldown)**  
        Sets the cooldown remaining for the ability.`,

    "Player.GetAbilityMaxCooldown": 
        `**Player.GetAbilityMaxCooldown(index)**  
        Returns the maximum cooldown for the ability.`,

    "Player.IsDisappeared": 
        `**Player.IsDisappeared()**  
        Returns true if the player is currently disappeared from blink.`,

    "Player.GetPlatform": 
        `**Player.GetPlatform()**  
        Returns the platform the player is on.`,

    "Player.GetClassType": 
        `**Player.GetClassType()**  
        Returns 'Player'.`,

    // Platform Functions
    "Platform.GetClassType": 
        `**Platform.GetClassType()**  
        Returns 'Platform'.`,

    "Platform.GetHome": 
        `**Platform.GetHome()**  
        Gets the home position of the platform.`,

    "Platform.GetHomeRot": 
        `**Platform.GetHomeRot()**  
        Gets the home rotation of the platform.`,

    "Platform.GetScale": 
        `**Platform.GetScale()**  
        Gets the scale of the platform.`,

    "Platform.SetScale": 
        `**Platform.SetScale(scale)**  
        Sets the scale of the platform.`,

    "Platform.SetHome": 
        `**Platform.SetHome(posX, posY)**  
        Sets the home position of the platform.`,

    "Platform.SetHomeRot": 
        `**Platform.SetHomeRot(NewRot)**  
        Sets the home rotation of the platform.`,

    "Platform.ShakePlatform": 
        `**Platform.ShakePlatform(Duration, ShakeAmount)**  
        Shakes the platform.`,

    "Platform.DropAllPlayers": 
        `**Platform.DropAllPlayers(DropForce)**  
        Drops all players from the platform.`,

    "Platform.GetBaseScale": 
        `**Platform.GetBaseScale()**  
        Gets the base scale of the platform.`,

    "Platform.SetBaseScale": 
        `**Platform.SetBaseScale(scale)**  
        Sets the base scale of the platform.`,

    "Platform.GetPlatformType": 
        `**Platform.GetPlatformType()**  
        Gets the platform type.`,

    "Platform.GetBoplBody": 
        `**Platform.GetBoplBody()**  
        Gets the BoplBody associated with the platform.`,

    "Platform.IsBoulder": 
        `**Platform.IsBoulder()**  
        Returns true if the platform is a boulder.`,

    "Platform.IsResizable": 
        `**Platform.IsResizable()**  
        Returns true if the platform is resizable.`,

    "Platform.ResizePlatform": 
        `**Platform.ResizePlatform(Width, Height, Radius)**  
        Resizes the platform.`,

    "Platform.GetPlatformSize": 
        `**Platform.GetPlatformSize()**  
        Gets the width, height, and radius of the platform.`,

    "Platform.GetTrueWidthAndHeight": 
        `**Platform.GetTrueWidthAndHeight()**  
        Gets the true width and height considering rotations.`,

    // BoplBody Functions
    "BoplBody.GetClassType": 
        `**BoplBody.GetClassType()**  
        Returns 'BoplBody'.`,

    "BoplBody.HasBeenInitialized": 
        `**BoplBody.HasBeenInitialized()**  
        Returns true if the BoplBody has been initialized.`,

    "BoplBody.IsBeingDestroyed": 
        `**BoplBody.IsBeingDestroyed()**  
        Returns true if the BoplBody is being destroyed.`,

    "BoplBody.GetPos": 
        `**BoplBody.GetPos()**  
        Returns the position of the BoplBody.`,
        
        // Base Lua functions
        "pairs": "pairs(table) - Returns an iterator function for the key-value pairs of the table.",
        "ipairs": "ipairs(table) - Returns an iterator function for the integer keys of the table.",
        "next": "next(table, key) - Returns the next key-value pair in the table.",
        "setmetatable": "setmetatable(table, metatable) - Sets the metatable for the table.",
        "getmetatable": "getmetatable(table) - Returns the metatable for the table.",
        "rawset": "rawset(table, key, value) - Sets the value in the table without invoking metamethods.",
        "rawget": "rawget(table, key) - Gets the value in the table without invoking metamethods.",
        "rawequal": "rawequal(value1, value2) - Compares two values for equality without invoking metamethods.",
        "rawlen": "rawlen(table) - Returns the length of the table without invoking the __len metamethod.",
        "type": "type(value) - Returns the type of the value.",
        "tostring": "tostring(value) - Converts a value to a string.",
        "tonumber": "tonumber(value, base) - Converts a value to a number.",
        "math": "math - Provides mathematical functions and constants.",
        "table": "table - Provides table manipulation functions.",
        "string": "string - Provides string manipulation functions.",
        "coroutine": "coroutine - Provides coroutine functions for multitasking.",
        "pcall": "pcall(function, ...) - Calls a function in protected mode.",
        "xpcall": "xpcall(function, err) - Calls a function in protected mode with an error handler.",
        "error": "error(message) - Raises an error.",
        "assert": "assert(condition, message) - Throws an error if the condition is false.",
        "collectgarbage": "collectgarbage(opt) - Controls the garbage collector."
    };

    public provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);

        const doc = this.functionDocs[word];
        if (doc) {
            return new vscode.Hover(doc);
        }

        return null; // No hover info found
    }
}

import React, { Component, useEffect, useState } from "react";
import { useFieldForInputText } from "./CustomHookUtil";

export default function CustomHook() {

    // this way satisfy hook rules
    const username = useFieldForInputText('')
    const password = useFieldForInputText('')

    return <div>
        <form>
            <input type="text" name="username" {...username} />
            <input type="text" name="password" {...password} />
        </form>
    </div>

}

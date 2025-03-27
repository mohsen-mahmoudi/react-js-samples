import React, { Component, useEffect, useState } from "react";

export function useFieldForInputText(defaultValue) {

    const [value, setValue] = useState(defaultValue)
    return {
        value,
        onChange: e => { setValue(e.target.value) }
    }
}

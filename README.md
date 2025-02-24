# Unexpected NaN Comparison in JavaScript

This repository demonstrates a common pitfall in JavaScript related to comparing NaN (Not a Number) values.  The loose equality operator (`==`) in JavaScript does not treat NaN as equal to itself, which can lead to unexpected behavior.

## Problem

The provided JavaScript code implements a simple function `foo` that compares two numbers for equality.  However, when `NaN` values are passed as arguments, the function incorrectly returns `false`, even though both values are technically NaN.

## Solution

The recommended approach is to use the `Number.isNaN()` function to check if a value is NaN. This method reliably identifies NaN values, resolving the issue demonstrated in the problematic code.

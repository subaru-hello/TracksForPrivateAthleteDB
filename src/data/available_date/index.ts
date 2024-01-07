import { AvailableTerm } from "domains";
import { todoroki } from "./todoroki";
import { yumenoshima } from "./yumenoshima";

const baseArray: AvailableTerm[] = [];

export const available_date = baseArray.concat(todoroki, yumenoshima);
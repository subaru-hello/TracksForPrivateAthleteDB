import { todoroki } from "./todoroki";
import { yumenoshima } from "./yumenoshima";
import { AvailableTerm } from "domains";

const baseArray: AvailableTerm[] = [];

export const available_date = baseArray.concat(todoroki, yumenoshima);
import type { AppDispatch, RootSate } from "@/main";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootSate>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

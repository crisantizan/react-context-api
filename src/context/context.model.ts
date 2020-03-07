/** data to return when using the «useContext» hook */
export interface ContextModel<T> {
  /** select all or a specific prop of the select context */
  selector<TState = T, TSelected = unknown>(
    selector: (state: TState) => TSelected,
  ): TSelected;
  dispatch: React.Dispatch<any>;
}

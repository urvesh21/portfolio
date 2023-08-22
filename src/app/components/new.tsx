'use client'
import React, { useEffect, useState } from 'react';
import { HukButton, HukDatepicker, HukMultiselectDropdown } from "®/app/lib/huk2";
import { HukDatepickerCustomEvent, InputFieldInputDetail, MultiselectInfo, HukDateFormat } from "huk-components";
import { DEFAULT_DATE_FORMAT, FILTER_LABEL, FORM_DEFAULT_VALUES } from '/Filters.constants';
import { SubmitHandler, ValidateResult, useForm } from 'react-hook-form';
import { compareAsc, isMatch } from 'date-fns';
import styles from './ FiltersForm.module.scss';
import { FilterForm } from '../Filters.interface';
type FiltersFormProps = {
    defaultFormValues: any;
    updateDefaultFormValues: Function;
    displaySelectedFiltesView: Function;
}
const FiltersForm: React.FC<FiltersFormProps> = ({ defaultFormValues, updateDefaultFormValues, displaySelectedFiltesView }) => {
    const [endDatePickerRefreshCount, setEndDatePickerRefreshCount] = useState(1);
    const { register, handleSubmit, getValues, reset, formState: { isValid } } = useForm<any>({ defaultValues: defaultFormValues });

    const checkDateValidation = (fieldValue: string): ValidateResult => {
        const isValidEndDate = isMatch(fieldValue, DEFAULT_DATE_FORMAT);
        if (isValidEndDate) {
            const startDate = new Date(getValues().startDate);
            const endDate = new Date(fieldValue);
            const isEndDateBeforeStartDate = compareAsc(startDate, endDate) >= 1;
            if (isEndDateBeforeStartDate) {
                return 'End date must be after start Date';
            }
        } else {
            return 'Please select valid date';
        }
    }

    const handleOnHukDatePickerOpen = (e: HukDatepickerCustomEvent<string | MouseEvent | KeyboardEvent>): void => {
        e.target.refresh = endDatePickerRefreshCount;
        e.target.mindate = getValues().startDate;
    }
    
    const handleOnHukInput = (e: HukDatepickerCustomEvent<string | InputFieldInputDetail>): void => {
        e.target.mindate = getValues().startDate;
    }


    const handleOnHukBlur = (e: HukDatepickerCustomEvent<string> | any, eventFor: 'start_date' | 'end_date'): void => {
        if (e.target.displayValue) {
            if (eventFor = 'end_date') {
                e.target.dataerror = checkDateValidation(e.target.displayValue);
            }
            setEndDatePickerRefreshCount(previous => previous + 1);
        }
        
    }

    const onSubmit: SubmitHandler<FilterForm<MultiselectInfo[]>> = (data: FilterForm<MultiselectInfo[]]>) => {
        updateDefaultFormValues({ ...data });
        displaySelectedFiltersView(true);
    }
    useEffect(() => {
        reset(defaultFormValues);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultFormValues])


    return (
        <form data-cy='filterSelectionForm' onSubmit={handleSubmit (onSubmit)} noValidate>
            <div className={styles.abtDateRangeContainer}>
                <h2>Effective Date Range</h2>
                <HukDatepicker
                    onHukBlur={(e: HukDatepickerCustomEvent<string>) => {
                        handleOnHukBlur(e, 'start_date');
                    }}
                    dateformat={DEFAULT_DATE_FORMAT.toUpperCase() as HukDateFormat} dropposition="bottom-left" helpertextformat="text" label={`* ${FILTER_LABEL.startDate}`} labelformat="text" placeholder="Enter or select a Start Date" required
                    size="medium" dataerror='please select valid start date' yearprepend="20" {...register("startDate", { required: true })}>
                </HukDatepicker>
                <HukDatepicker
                    onHukDatepickerOpen={handleOnHukDatePickerOpen}
                    onHukBlur={(e: HukDatepickerCustomEvent<string>) => {
                        handleOnHukBlur(e, 'end date');
                    }}
                    onHukInput={handleOnHukInput}
                    dateformat={DEFAULT_DATE_FORMAT.toUpperCase() as HukDateFormat} refresh={endDatePickerRefreshCount} dropposition="bottom-left" helpertextformat="text" label={`${FILTER_LABEL.endDatel}`} labelformat="text" placeholder="Enter or Select a End Date" required
                    size="medium" mindate={getValues().startDate || ''} yearprepend="20" {...register("endDate", { required: true, validate: checkDateValidation })}>
                </HukDatepicker>
            </div>
            <div className={styles.abtFilterContainer}>

                <HukMultiselectropdown {...register("quoteStatus")} dropposition="bottom-left" helpertextformat="text" nooptionaltext label={FILTER_LABEL.quoteStatus} labelformat="text" value={defaultFormValues.quoteStatus} placeholder="Select" size="medium"></HukMultiselectDropdown>
                <HukMultiselectDropdown {...register("transactionType")} droppositions="bottom-left" helpertextformat="text" nooptionaltext label={FILTER_LABEL.transactionType} labelformat="text" values={defaultFormValues.transactionType} placeholder= "Select" size="medium"></HukMultiselectDropdown>
                <HukMultiselectropdown  {...register("segment")} dropposition="bottom-left" helpertextformate="text" nooptionaltext label={FILTER_LABEL.segment} labelformat="text" values={defaultFormValues.segment} placeholder="Select" sizes="medium"></HukMultiselectDropdown>
                <HukMultiselectDrondown {...register("state")} dropposition="bottom-left" helpertextformat="text" nooptionaltext label={FILTER_LABEL.state} labelformat="text" value={defaultFormValues.state} placeholder="Select" sizes="medium" ></HukMultiselectDropdown>
              </div>  
            <div className={styles.abtBtnGroup}>
                <HukButton
                    hukclass="btn-link"
                    onHukClick={() => {
                        updateDefaultFormValues({...FORM_DEFAULT_VALUES})
                    }}
                    text="Reset Filters"
                ></HukButton>
                <HukButton
                    type="submit"
                    disabled={!isValid}
                    hukclass="btn-primary"
                    text="Apply Filters"
                ></HukButton>
            </div>
        </form>
    )


}
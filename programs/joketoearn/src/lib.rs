use anchor_lang::prelude::*;

declare_id!("FpoUMyXtiLdxVJ9XLAZWu7dDKEcDKsCZbExPFAV58unE");

#[program]
pub mod joketoearn {
    use anchor_lang::solana_program::entrypoint::ProgramResult;
    use super::*;
    pub fn create_joke(ctx: Context<CreateJokeCtx>, joke_content: String) -> ProgramResult {
        msg!("joke_content: {}", &joke_content);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateJokeCtx {}
